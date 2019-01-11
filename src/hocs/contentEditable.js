/* eslint-disable react/display-name */
import React from "react";

export default function contentEditable(WrappedComponent) {
  return class extends React.Component {
    state = {
      editing: false
    };

    toggleEdit = e => {
      e.stopPropagation();
      if (this.state.editing) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState(
        {
          editing: true
        },
        () => {
          this.domElm.focus();
        }
      );
    };

    save = () => {
      this.setState({ editing: false }, () => {
        this.props.getInputValue(this.domElm.textContent);
      });
    };

    cancel = () => {
      this.setState({
        editing: false
      });
    };

    handleKeyDown = e => {
      const { key } = e;
      const { dontSaveOnEnter } = this.props;
      if (dontSaveOnEnter) {
        switch (key) {
          case "Escape":
            this.save();
            break;
        }
      } else {
        switch (key) {
          case "Enter":
          case "Escape":
            this.save();
            break;
        }
      }
    };

    render() {
      let editOnClick = true;
      const { editing } = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <WrappedComponent
          suppressContentEditableWarning={true}
          className={editing ? "editing" : ""}
          onClick={editOnClick ? this.toggleEdit : undefined}
          contentEditable={editing}
          ref={domNode => {
            this.domElm = domNode;
          }}
          onBlur={this.save}
          onKeyDown={this.handleKeyDown}
          {...this.props}
        >
          {this.props.value}
        </WrappedComponent>
      );
    }
  };
}
