/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { dateTransformation } from "../assets/helpers";

import EditIcon from "../assets/icons/edit.svg";

import { colors } from "../assets/globalStyles";
import SingleToDo from "./SingleToDo";
import SimpleInput from "./basics/SimpleInput";
import { Button } from "./basics/Button";

import deleteItem from "../redux/actionCreators/deleteItem";
import SimpleTextArea from "./basics/SimpleTextArea";
import editItemName from "../redux/actionCreators/editItemName";
import editItemNotes from "../redux/actionCreators/editItemNotes";

class SingleToDoDetailsEdit extends React.Component {
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
        {this.props.showDetailsEditItems ? (
          <form onSubmit={e => this.handleSubmit(e)}>
            <SimpleInput
              getInputValue={this.getInputValue}
              initialValue={this.props.task.task}
              inputPlaceholder="Insert new item"
            />
            <SimpleTextArea
              getTextAreaValue={this.getTextAreaValue}
              initialValue={this.props.task.notes}
              inputPlaceholder="Add notes"
            />
          </form>
        ) : (
          <StyledFakeInputFields
            onClick={() => this.props.showDetailsEditItemsFunc()}
          >
            <span>{this.props.task.task}</span>
            <span>
              {this.props.task.notes != ""
                ? this.props.task.notes
                : "Add notes"}
            </span>
          </StyledFakeInputFields>
        )}
      </React.Fragment>
    );
  }
}

// styled components
const StyledFakeInputFields = styled("div")`
  span {
    display: block;
    position: relative;
    text-align: left;
    background: #f7f7f7;
    width: 100%;
    margin-bottom: 15px;
    border: 0;
    padding: 18px 10px;
    cursor: pointer;
  }
  span + span {
    padding: 12px 10px;
    margin: 10px 0;
    height: 120px;
  }
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
