/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../globalStyles";
import SingleReminder from "./SingleReminder";

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

const StyledListItem = styled("li")`
  position: relative;
  padding: 20px;
  text-align: left;
`;

const SingleReminderDetails = props => (
  <React.Fragment>
    <StyledDetailsContainer>
      <h3>Task details</h3>
      <ul>
        <SingleReminder
          task={props.task}
          handleCheck={props.handleCheck}
          itemListDetails={props.itemListDetails}
        />

        <StyledListItem>
          <b>Date created: </b>
          {props.task.start_date}
        </StyledListItem>
        <StyledListItem>
          <b>Scheduled to: </b>
          {props.task.end_date}
        </StyledListItem>
      </ul>
    </StyledDetailsContainer>
  </React.Fragment>
);

export default SingleReminderDetails;
