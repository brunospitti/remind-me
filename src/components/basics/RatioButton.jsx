/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";
import PropTypes from 'prop-types';

import { colors } from "../../assets/globalStyles";

import { checkItem } from "../../redux/actionCreators/checkItem";

const RatioButton = props => (
  <StyledRatio
    mainColor={props.mainColor}
    className={props.checked ? "checked" : "not-checked"}
  >
    <input type="checkbox" id={`checkbox${props.taskId}`} />
    <label
      htmlFor={`checkbox${props.taskId}`}
      onClick={() => props.handleCheckItem(props.taskId, props.listId)}
    />
  </StyledRatio>
);

// propTypes
RatioButton.propTypes = {
  mainColor: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  taskId: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  handleCheckItem: PropTypes.func.isRequired
}

// styled components
const StyledRatio = styled("div")`
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  label {
    width: 20px;
    height: 20px;
    background-color: ${colors.light};
    border: 1px solid ${colors.lightGrey};
    border-radius: 50%;
    cursor: pointer;
    left: 0;
    position: relative;
    display: block;
    transition: 0.25s all ease;
    &:hover {
      background-color: ${lighten(0.3, colors.secondary)};
      border: 1px solid ${colors.secondary};
    }
    &:after {
      border: 5px solid ${props => props.mainColor};
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      top: -1px;
      left: 1px;
      opacity: 0;
      position: absolute;
      transform: rotate(-45deg);
      width: 16px;
    }
  }
  input[type="checkbox"] {
    width: 1px;
    height: 1px;
    visibility: hidden;
    position: absolute;
  }
  &.checked {
    label {
      background-color: white;
      border-color: ${props => lighten(0.1, props.mainColor)};
      &:after {
        opacity: 1;
      }
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  handleCheckItem(itemToCheck, listId) {
    dispatch(checkItem(itemToCheck, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(RatioButton);
