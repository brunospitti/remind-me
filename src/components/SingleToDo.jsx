import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { dateTimeTransformation } from "../assets/helpers";

import { deleteItem } from "../redux/actionCreators/deleteItem";
import { changeItemPriorityColor } from "../redux/actionCreators/changeItemPriorityColor";

import BellIcon from "../assets/icons/bell.svg";

import PrioritySelector from "./basics/PrioritySelector";
import RatioButton from "./basics/RatioButton";
import { Button } from "./basics/Button";
import { colors, mobileBreakpoint } from "../assets/globalStyles";

class SingleToDo extends React.PureComponent {
  getClasses = () => {
    let classes = "";
    if (this.props.task.checked) {
      if (this.props.showItem) {
        classes = "checked show";
      } else {
        classes = "checked hide";
      }
    } else {
      classes = "not-checked show";
    }
    return classes;
  };

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
          className={this.getClasses()}
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
              {this.props.task.end_date != "" && (
                <StyledTime
                  mainColor={
                    this.props.task.reminder_set
                      ? colors.primary
                      : colors.lightGrey
                  }
                >
                  <BellIcon />
                  {dateTimeTransformation(this.props.task.end_date)}
                </StyledTime>
              )}
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
                  icon="delete"
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
  padding: 15px 20px;
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
    button {
      svg {
        &#deleteIcon {
          @media (${mobileBreakpoint}) {
            display: none;
          }
        }
      }
    }
    &.priority {
      right: 40px;
      @media (${mobileBreakpoint}) {
        right: 0;
      }
    }
  }
  &.checked {
    div {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }
  &.hide {
    display: none;
  }
`;

const StyledTask = styled("div")`
  width: calc(100% - 90px);
  padding-left: 15px;
  vertical-align: middle !important;
  @media (${mobileBreakpoint}) {
    width: calc(100% - 40px);
  }
`;

const StyledTime = styled("span")`
  position: relative !important;
  display: block;
  font-size: 0.8em;
  margin-top: 6px;
  color: ${props => props.mainColor};
  svg {
    width: 16px;
    stroke-width: 13px;
    stroke: ${props => props.mainColor};
    fill: ${props => props.mainColor};
    margin-bottom: -3px;
    margin-right: 5px;
  }
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
