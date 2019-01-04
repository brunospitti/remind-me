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
  getInputValue = inputValue => {
    this.props.handleEditItemName(this.props.listId, this.props.task.id, inputValue)
  };

  getTextAreaValue = textAreaValue => {
    this.props.handleEditItemNotes(this.props.listId, this.props.task.id, textAreaValue)
  };


  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

// styled components
const StyledDetailsContainer = styled("div")`
  height: calc(100% - 48px);
  width: 50%;
  position: absolute;
  padding: 20px;
  right: 5px;
  bottom: 0;
  background: white;
  box-shadow: -1px 2px 4px ${colors.lightGrey};
  &.active {
    width: 50%;
  }
  > button {
    position: absolute;
    bottom: 20px;
  }
  li#single-ToDo {
    div {
      padding-left: 0;
    }
    div + div {
      padding-left: 15px;
    }
  }
`;

const StyledEditIcon = styled(EditIcon)`
  cursor: ${props => props.cursor};
  display: inline-block;
  float: right;
  width: 33px;
  fill: ${props => props.mainColor};
`;

const StyledH3 = styled("h3")`
  font-size: 1.1em;
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
