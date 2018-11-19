/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "react-emotion";

import { colors } from "../globalStyles";

const StyledLi = styled("li")`
  position: relative;
  padding: 30px 0;
  &.checked {
    span {
      text-decoration: line-through;
      opacity: 0.5;
    }
    label {
      background-color: ${colors.secondary};
      border-color: ${colors.secondary};
      &:after {
        opacity: 1;
      }
    }
  }
`;

const StyledRatio = styled("div")`
  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    width: 28px;
    &:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
    }
  }
  input[type="checkbox"] {
    visibility: hidden;
  }
`;

const SingleReminder = props => (
  <React.Fragment>
    <StyledLi className={props.task.checked ? "checked" : "not-checked"}>
      <StyledRatio>
        <input type="checkbox" id={`checkbox${props.task.id}`} />
        <label
          htmlFor={`checkbox${props.task.id}`}
          onClick={() => props.handleCheck(props.task.id)}
        />
      </StyledRatio>
      <span>{props.task.task}</span>
    </StyledLi>
  </React.Fragment>
);

export default SingleReminder;
