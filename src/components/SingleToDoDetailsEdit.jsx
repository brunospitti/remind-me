/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { dateTransformation } from "../assets/helpers";

import { colors } from "../assets/globalStyles";

import { editItemName } from "../redux/actionCreators/editItemName";
import { editItemNotes } from "../redux/actionCreators/editItemNotes";
import { editItemEndDate } from "../redux/actionCreators/editItemEndDate";

import DivThanInput from "./basics/DivThanInput";
import DateTimePicker from "./DateTimePicker";

class SingleToDoDetailsEdit extends React.PureComponent {
  getInputValue = inputValue => {
    this.props.handleEditItemName(
      this.props.listId,
      this.props.task.id,
      inputValue
    );
    this.props.showDetailsFunc(true, this.props.task.id);
  };

  getTextAreaValue = textAreaValue => {
    this.props.handleEditItemNotes(
      this.props.listId,
      this.props.task.id,
      textAreaValue
    );
    this.props.showDetailsFunc(true, this.props.task.id);
  };

  getNewDate = newDate => {
    let endDate = "";
    if (newDate != "") {
      endDate = newDate.toISOString();
      endDate = endDate.substring(0, endDate.length - 7) + "00";
    }

    this.props.handleEditItemEndDate(
      this.props.listId,
      this.props.task.id,
      endDate
    );
    this.props.showDetailsFunc(true, this.props.task.id);
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
        <DateTimePicker
          defaultEndDate={this.props.task.end_date}
          getNewDate={this.getNewDate}
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

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  handleEditItemName(listId, taskId, newName) {
    dispatch(editItemName(listId, taskId, newName));
  },
  handleEditItemNotes(listId, taskId, newNotes) {
    dispatch(editItemNotes(listId, taskId, newNotes));
  },
  handleEditItemEndDate(listId, taskId, newDate) {
    dispatch(editItemEndDate(listId, taskId, newDate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleToDoDetailsEdit);
