/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import RatioButton from "./basics/RatioButton";

const StyledLi = styled("li")`
  position: relative;
  padding: 20px;
  text-align: left;
  span {
    display: table-cell;
    vertical-align: middle;
    padding-left: 15px;
    transition: 0.25s all ease;
    cursor: pointer;
  }
  &.checked {
    span {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }
`;

const StyledItemContainer = styled("div")`
  display: table;
  width: 100%;
`;

const SingleReminder = props => (
  <React.Fragment>
    <StyledLi className={props.task.checked ? "checked" : "not-checked"}>
      <StyledItemContainer>
        <RatioButton
          checked={props.task.checked}
          taskId={props.task.id}
          handleCheck={props.handleCheck}
          mainColor={props.mainColor}
        />
        <span
          role="button"
          onKeyPress={() => props.itemListDetails(props.task.id)}
          onClick={() => props.itemListDetails(props.task.id)}
          tabIndex="0"
        >
          {props.task.task}
        </span>
      </StyledItemContainer>
    </StyledLi>
  </React.Fragment>
);

export default SingleReminder;
