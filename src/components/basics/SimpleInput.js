import React from "react";
import styled from "styled-components";

export default class SimpleInput extends React.PureComponent {
  state = {
    inputValue: this.props.initialValue
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleBlur = () => {
    this.props.getInputValue(this.state.inputValue);
  };

  render() {
    return (
      <StyledInput
        className={this.props.className}
        autoFocus={this.props.autoFocus ? true : false}
        maxLength="35"
        type="text"
        placeholder={this.props.inputPlaceholder}
        value={this.state.inputValue}
        onChange={e => this.handleChange(e)}
        onBlur={() => this.handleBlur()}
      />
    );
  }
}

// styled components
const StyledInput = styled("input")`
  border: 0;
  border-bottom: 1px solid;
  font-size: 1em;
  margin-bottom: 2vh;
  padding-bottom: 5px;
`;
