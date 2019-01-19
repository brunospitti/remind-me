/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";
import EditIcon from "../assets/icons/edit.svg";

import { dateTransformation } from "../assets/helpers";

import { deleteItem } from "../redux/actionCreators/deleteItem";
import PrioritySelector from "./basics/PrioritySelector";
import { changeItemPriorityColor } from "../redux/actionCreators/changeItemPriorityColor";

import SingleToDoDetailsEdit from "./SingleToDoDetailsEdit";
import { Button } from "./basics/Button";

class SingleToDoDetails extends React.PureComponent {
  deleteItem = (itemToDelete, listId) => {
    this.props.closeDetails();
    this.props.handleDeleteItem(itemToDelete, listId);
    setTimeout(
      function() {
        this.props.completeListLayout();
      }.bind(this),
      0
    );
  };

  render() {
    return (
      <StyledDetailsContainer
        className={this.props.task.checked ? "checked" : "not-checked"}
      >
        <div className="header-container">
          <StyledH3 mainColor={this.props.mainColor}>Task details</StyledH3>
          <StyledEditIcon mainColor={this.props.mainColor} />
          <PrioritySelector
            handleChangeItemPriorityColor={
              this.props.handleChangeItemPriorityColor
            }
            priority={this.props.task.priority}
            listId={this.props.listId}
            taskId={this.props.task.id}
          />
        </div>
        <ul>
          <SingleToDoDetailsEdit
            task={this.props.task}
            showDetailsEditItems={this.props.showDetailsEditItems}
            showDetailsEditItemsFunc={this.props.showDetailsEditItemsFunc}
            itemListDetails={this.props.itemListDetails}
            mainColor={this.props.mainColor}
            showToDoOptionsFunc={this.props.showToDoOptionsFunc}
            listId={this.props.listId}
          />
        </ul>
        <StyledFooter mainColor={this.props.mainColor}>
          <Button
            className="footer-item"
            icon="collapse"
            clickBehavior={this.props.closeDetails}
            text="Close me"
          />
          <div className="footer-item">
            <b>Date created:</b>{" "}
            {dateTransformation(this.props.task.start_date)}
          </div>
          <Button
            className="footer-item"
            icon="delete"
            clickBehavior={() =>
              this.deleteItem(this.props.task.id, this.props.listId)
            }
            text="Delete"
          />
        </StyledFooter>
      </StyledDetailsContainer>
    );
  }
}

// styled components
const StyledDetailsContainer = styled("div")`
  height: 100%;
  width: 45%;
  position: absolute;
  padding: 20px;
  right: 5px;
  bottom: 0;
  background: white;
  box-shadow: -1px 2px 4px ${colors.lightGrey};
  &.active {
    width: 40%;
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
  &.checked {
    .header-container,
    ul,
    > div {
      opacity: 0.5;
    }
  }
`;

const StyledEditIcon = styled(EditIcon)`
  display: inline-block;
  float: right;
  width: 33px;
  fill: ${props => props.mainColor};
`;

const StyledH3 = styled("h3")`
  color: ${props => props.mainColor};
  margin-bottom: 10px;
  margin-top: 7px;
  font-size: 1.3em;
  display: inline-block;
`;

const StyledFooter = styled("div")`
  position: absolute;
  bottom: 0;
  background: ${lighten(0.225, colors.lightGrey)};
  width: 100%;
  left: 0;
  button {
    background: ${lighten(0.2, colors.lightGrey)};
    margin: 0;
    padding: 20px;
    transition: 0.25s all ease;
    &:hover {
      background: ${lighten(0.15, colors.lightGrey)};
    }
    svg {
      margin-left: 0;
      fill: ;
    }
  }
  div {
    width: calc(100% - 120px);
    text-align: center;
  }
  button:last-child {
    svg {
      &:hover {
        opacity: 0.4 !important;
        fill: black !important;
      }
    }
  }
  .footer-item {
    display: inline-block;
  }
`;

const mapDispatchToProps = dispatch => ({
  handleDeleteItem(itemToDelete, listId) {
    dispatch(deleteItem(itemToDelete, listId));
  },
  handleChangeItemPriorityColor(listId, taskId, newPriority) {
    dispatch(changeItemPriorityColor(listId, taskId, newPriority));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SingleToDoDetails);
