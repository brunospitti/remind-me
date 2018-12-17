import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import addItem from "../redux/actionCreators/addItem";

import { colors } from "../assets/globalStyles";

const StyledInput = styled("input")`
  position: relative;
  text-align: left;
  margin-left: 53px;
  width: 60%;
  margin-bottom: 5px;
  border: 0;
  background: transparent;
  padding: 20px 0;
`;

class AddItem extends React.Component {
  state = {
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue, this.props.listId);
    setTimeout(function(){
      this.props.completeListLayout()
    }.bind(this), 0);
    this.setState({ inputValue: "" });
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <StyledInput
          maxLength="35"
          type="text"
          placeholder="Insert new item"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleAddItem(newItem, listId) {
    dispatch(addItem(newItem, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);