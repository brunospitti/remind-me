/* eslint-disable react/display-name */
import React from "react";

import { colors } from "../assets/globalStyles";

import DeleteIcon from "../assets/icons/delete.svg";
import PriorityIcon from "../assets/icons/priority.svg";
import CollapseIcon from "../assets/icons/collapse.svg";
import AddIcon from "../assets/icons/add.svg";

export default function button(WrappedComponent) {
  return class extends React.PureComponent {
    state = {};

    getMainColor = () => {
      let mainColor = colors.lightGrey;
      if (this.props.primary) {
        mainColor = colors.primary;
      } else if (this.props.secondary) {
        mainColor = colors.secondary;
      } else if (this.props.danger) {
        mainColor = colors.danger;
      }

      return mainColor;
    };

    render() {
      const renderIconButton = () => {
        let { icon } = this.props;
        if (icon === "priority") {
          return (
            <PriorityIcon
              alt="priority item"
              id="priorityIcon"
              style={{ fill: this.props.mainColor }}
            />
          );
        } else if (icon === "delete") {
          return <DeleteIcon alt="delete item" id="deleteIcon" />;
        } else if (icon === "collapse") {
          return <CollapseIcon alt="collapse item" id="collapseIcon" />;
        } else if (icon === "add") {
          return <AddIcon alt="add item" id="addIcon" />;
        } else {
          return null;
        }
      };
      let { icon } = this.props;
      if (icon) {
        return (
          <WrappedComponent onClick={this.props.clickBehavior} className={this.props.className}>
            {renderIconButton()}
          </WrappedComponent>
        );
      } else {
        return (
          <WrappedComponent
            onClick={this.props.clickBehavior}
            mainColor={this.getMainColor()}
            className={this.props.className}
          >
            {this.props.text}
          </WrappedComponent>
        );
      }
    }
  };
}
