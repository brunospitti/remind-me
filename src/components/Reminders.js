import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { colors } from "../globalStyles";

import { mock_lists } from "../assets/mock_data";

import SingleReminder from "./SingleReminder";
import SingleReminderDetails from "./SingleReminderDetails";

const expandsReminderOuter = keyframes`
  0% {
    width: 60%;
  }
  100% {
    width: 80%;
  }
`;

const compressReminderOuter = keyframes`
  0% {
    width: 80%;
  }
  100% {
    width: 60%;
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
  &.compressed {
    animation: ${compressReminderOuter} 0.25s ease forwards;
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
  height: 55vh;
  overflow-x: auto;
  &::-webkit-scrollbar-track {
    background-color: ${props => lighten(0.5, props.mainColor)};
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${props => lighten(0.5, props.mainColor)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.mainColor};
  }
  li {
    position: relative;
    height: 61px;
    border-bottom: 1px solid ${lighten(0.2, colors.lightGrey)};
    &.first-fake {
      border-top: 1px solid ${lighten(0.2, colors.lightGrey)};
    }
  }
`;

const StyledInput = styled("input")`
  position: relative;
  text-align: left;
  margin-left: 58px;
  width: 60%;
  margin-bottom: 5px;
  border: 0;
  background: transparent;
  padding: 20px 0;
`;

export default class Reminders extends React.Component {
  state = {
    showDetails: false,
    detailsId: ""
  };

  handleCheck = taskId => {
    let currState = this.props.currentList;
    let currTask = currState.items.find(x => x.id === taskId);
    currTask.checked = !currTask.checked;
    currState.currTask;
    this.props.updateList(currState);
  };

  itemListDetails = taskId => {
    this.setState({ showDetails: !this.state.showDetails, detailsId: taskId });
  };

  getTaskFromId = taskId => {
    let currState = this.state.currList;
    let currTask = currState.items.find(x => x.id === taskId);
    return currTask;
  };

  render() {
    return (
      <React.Fragment>
        <StyledReminderOuter
          className={this.state.showDetails ? "expanded" : "compressed"}
        >
          <h2>{this.props.currentList.list}</h2>
          <StyledReminder mainColor={this.props.currentList.color}>
            <ul>
              {this.props.currentList.items.map(task => (
                <SingleReminder
                  key={task.id}
                  task={task}
                  handleCheck={this.handleCheck}
                  itemListDetails={this.itemListDetails}
                  mainColor={this.props.currentList.color}
                />
              ))}
              <StyledInput
                type="text"
                placeholder="Insert new bitch right here"
              />
              {[...Array(this.props.completeListLayoutNum)].map((e, i) => (
                <li key={i} className={i === 0 ? "first-fake" : null} />
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
