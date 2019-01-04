/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import PrioritySelector from "./basics/PrioritySelector";
import RatioButton from "./basics/RatioButton";
import { Button } from "./basics/Button";

import deleteItem from "../redux/actionCreators/deleteItem";
import changeItemPriorityColor from "../redux/actionCreators/changeItemPriorityColor";

class SingleToDo extends React.PureComponent {
  deleteItem = (itemToDelete, listId) => {
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
      <React.Fragment>
        <StyledLi
          id="single-to-do"
          className={this.props.task.checked ? "checked" : "not-checked"}
          onMouseEnter={() =>
            this.props.showToDoOptionsFunc(this.props.task.id, true)
          }
          onMouseLeave={() =>
            this.props.showToDoOptionsFunc(this.props.task.id, false)
          }
        >
          <div>
            <RatioButton
              checked={this.props.task.checked}
              taskId={this.props.task.id}
              mainColor={this.props.mainColor}
              listId={this.props.listId}
            />
            <StyledTask
              role="button"
              onKeyPress={() => this.props.itemListDetails(this.props.task)}
              onClick={() => this.props.itemListDetails(this.props.task)}
              tabIndex="0"
            >
              {this.props.task.task}
            </StyledTask>
            <PrioritySelector
              handleChangeItemPriorityColor={
                this.props.handleChangeItemPriorityColor
              }
              priority={this.props.task.priority}
              listId={this.props.listId}
              taskId={this.props.task.id}
            />
            {this.props.showToDoOptions && (
              <span>
                <Button
                  icon="deleteIcon"
                  clickBehavior={() =>
                    this.deleteItem(this.props.task.id, this.props.listId)
                  }
                  text="Delete"
                />
              </span>
            )}
          </div>
        </StyledLi>
      </React.Fragment>
    );
  }
}

// styled components
const StyledLi = styled("li")`
  position: relative;
  padding: 20px;
  text-align: left;
  > div {
    width: 100%;
  }
  div {
    display: inline-block;
    box-sizing: border-box;
    transition: 0.25s all ease;
    vertical-align: top;
    cursor: pointer;
  }
  span {
    position: absolute;
    right: 0;
    top: 0;
    &.priority {
      right: 40px;
    }
  }
  &.checked {
    div {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }
`;

const StyledTask = styled("div")`
  width: calc(100% - 90px);
  padding-left: 15px;
  vertical-align: middle !important;
`;

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  handleDeleteItem(itemToDelete, listId) {
    dispatch(deleteItem(itemToDelete, listId));
  },
  handleChangeItemPriorityColor(listId, taskId, newPriority) {
    dispatch(changeItemPriorityColor(listId, taskId, newPriority));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleToDo);
