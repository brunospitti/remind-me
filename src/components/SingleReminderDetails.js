/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../globalStyles";

const StyledDetailsContainer = styled("div")`
  height: calc(100% - 48px);
  width: 50%;
  position: absolute;
  right: 5px;
  bottom: 0;
  background: white;
  box-shadow: -1px 2px 4px ${colors.lightGrey};
  &.active {
    width: 50%;
  }
`;

const SingleReminderDetails = props => (
  <React.Fragment>
    <StyledDetailsContainer>
      <h3>Task details</h3>
      {props.task.task}
      {props.task.end_date}
      {props.task.state_date}
    </StyledDetailsContainer>
  </React.Fragment>
);

export default SingleReminderDetails;
