/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { colors } from "../assets/globalStyles";

import editItemName from "../redux/actionCreators/editItemName";
import editItemNotes from "../redux/actionCreators/editItemNotes";

import DivThanInput from "./basics/DivThanInput";

class SingleToDoDetailsEdit extends React.PureComponent {
  state = {
    showEditItems: false
  };

  getInputValue = inputValue => {
    this.props.handleEditItemName(
      this.props.listId,
      this.props.task.id,
      inputValue
    );
  };

  getTextAreaValue = textAreaValue => {
    this.props.handleEditItemNotes(
      this.props.listId,
      this.props.task.id,
      textAreaValue
    );
  };

  render() {
    return (
      <React.Fragment>
        <StyledEditableDiv
          value={this.props.task.task}
          getInputValue={this.getInputValue}
          inputPlaceholder="Edit task"
        />
        <StyledEditableDivTextArea
          dontSaveOnEnter={true}
          value={this.props.task.notes}
          getInputValue={this.getTextAreaValue}
          inputPlaceholder="Edit task"
        />
      </React.Fragment>
    );
  }
}

// styled components

const StyledEditableDiv = styled(DivThanInput)`
  position: relative;
  text-align: left;
  background: ${colors.light};
  width: 100%;
  margin-bottom: 5px;
  border: 0;
  padding: 15px 10px;
`;

const StyledEditableDivTextArea = styled(DivThanInput)`
  position: relative;
  text-align: left;
  background: ${colors.light};
  width: 100%;
  margin-bottom: 5px;
  border: 0;
  padding: 12px 10px;
  margin: 10px 0;
  height: 120px;
  overflow-x: auto;
`;

const mapDispatchToProps = dispatch => ({
  handleEditItemName(listId, taskId, newName) {
    dispatch(editItemName(listId, taskId, newName));
  },
  handleEditItemNotes(listId, taskId, newNotes) {
    dispatch(editItemNotes(listId, taskId, newNotes));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SingleToDoDetailsEdit);
