import React from "react";
import styled, { keyframes } from "styled-components";

import { colors } from "../assets/globalStyles";

const StyledInput = styled("input")`
  position: relative;
  text-align: left;
  margin-left: 58px;
  width: 60%;
  margin-bottom: 5px;
  border: 0;
  background: transparent;
  padding: 20px 0;
`;

export default class AddItem extends React.Component {
  state = {
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <StyledInput
          type="text"
          placeholder="Insert new bitch right here"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />
      </form>
    );
  }
}
