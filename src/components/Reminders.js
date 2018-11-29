import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { colors } from "../globalStyles";

import mock_data from "../assets/mock_data";

import SingleReminder from "./SingleReminder";
import SingleReminderDetails from "./SingleReminderDetails";

export default class Reminders extends React.Component {
  state = {
    mock_data,
    showDetails: false,
    detailsId: ""
  };

  handleCheck = taskId => {
    let currState = [...this.state.mock_data];
    let currTask = currState.find(x => x.id === taskId);
    currTask.checked = !currTask.checked;
    currState.currTask;
    this.setState({ mock_data: currState });
  };

  itemListDetails = taskId => {
    this.setState({ showDetails: !this.state.showDetails, detailsId: taskId });
  };

  getTaskFromId = taskId => {
    let currState = [...this.state.mock_data];
    let currTask = currState.find(x => x.id === taskId);
    return currTask;
  };

  render() {
    const expandsReminderOuter = keyframes`
      0% {
        width: 60%;
      }
      100% {
        width: 80%;
      }
    `;

    const StyledReminderOuter = styled("div")`
      width: 60%;
      margin: 30px auto;
      position: relative;
      transition: all 0.25s ease;
      &.expanded {
        animation: ${expandsReminderOuter} 0.25s ease forwards;
      }
      h2 {
        font-size: 2em;
        margin-bottom: 20px;
      }
    `;
    const StyledReminder = styled("div")`
      padding: 0 20px;
      border-radius: 3px;
      box-shadow: 1px 1px 4px ${colors.lightGrey};
      background: ${lighten(0.025, colors.light)};
      max-height: 60vh;
      overflow-x: auto;
      &::-webkit-scrollbar-track {
        background-color: ${colors.complementary};
      }

      &::-webkit-scrollbar {
        width: 6px;
        background-color: ${colors.complementary};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.secondary};
      }
    `;

    return (
      <React.Fragment>
        <StyledReminderOuter
          className={this.state.showDetails ? "expanded" : null}
        >
          <h2>List name</h2>
          <StyledReminder>
            <ul>
              {this.state.mock_data.map(task => (
                <SingleReminder
                  key={task.id}
                  task={task}
                  handleCheck={this.handleCheck}
                  itemListDetails={this.itemListDetails}
                />
              ))}
            </ul>
          </StyledReminder>
          {this.state.showDetails && (
            <SingleReminderDetails
              task={this.getTaskFromId(this.state.detailsId)}
              handleCheck={this.handleCheck}
              itemListDetails={this.itemListDetails}
            />
          )}
        </StyledReminderOuter>
      </React.Fragment>
    );
  }
}
