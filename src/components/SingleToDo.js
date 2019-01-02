/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import RatioButton from "./basics/RatioButton";
import { Button } from "./basics/Button";

import deleteItem from "../redux/actionCreators/deleteItem";

class SingleToDo extends React.PureComponent {
  deleteItem = (itemToDelete, listId) => {
    this.props.handleDeleteItem(itemToDelete, listId);
    setTimeout(function(){
      this.props.completeListLayout()
    }.bind(this), 0);
  };
  render() {
    return (

      <React.Fragment>
        <StyledLi
          id="single-to-do"
          className={this.props.task.checked ? "checked" : "not-checked"}
          onMouseEnter={() => this.props.showToDoOptionsFunc(this.props.task.id, true)}
          onMouseLeave={() => this.props.showToDoOptionsFunc(this.props.task.id, false)}
        >
          <StyledItemContainer>
            <RatioButton
              checked={this.props.task.checked}
              taskId={this.props.task.id}
              mainColor={this.props.mainColor}
              listId={this.props.listId}
            />
            <div
              role="button"
              onKeyPress={() => this.props.itemListDetails(this.props.task.id)}
              onClick={() => this.props.itemListDetails(this.props.task.id)}
              tabIndex="0"
            >
              {this.props.task.task}
            </div>
            {this.props.showToDoOptions && (
              <span>
                <Button
                  icon="deleteIcon"
                  clickBehavior={() => this.deleteItem(this.props.task.id, this.props.listId)}
                  text="Delete"
                />
              </span>
            )}
          </StyledItemContainer>
        </StyledLi>
      </React.Fragment>
    )
  }
}

// styled components
const StyledLi = styled("li")`
  cursor: pointer;
  position: relative;
  padding: 20px;
  text-align: left;
  div {
    display: table-cell;
    vertical-align: middle;
    padding-left: 15px;
    transition: 0.25s all ease;
    cursor: pointer;
  }
  span {
    position: absolute;
    right: 0;
    top: 0;
  }
  &.checked {
    div {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }
`;

const StyledItemContainer = styled("div")`
  display: table;
  width: 100%;
`;


const mapDispatchToProps = dispatch => ({
  handleDeleteItem(itemToDelete, listId) {
    dispatch(deleteItem(itemToDelete, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SingleToDo);

