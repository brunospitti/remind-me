import React from "react";
import { connect } from "react-redux";

import mock_data from "../assets/mock_data";

import SingleReminder from "./SingleReminder";
import { Button } from "./basics/Button";

export default class Reminders extends React.Component {
  state = {
    mock_data
  };

  handleCheck = taskId => {
    let currState = [...this.state.mock_data];
    let currTask = currState.find(x => x.id === taskId);
    currTask.checked = !currTask.checked;
    currState.currTask;
    this.setState({ mock_data: currState });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.mock_data.map(task => (
            <SingleReminder
              key={task.id}
              task={task}
              handleCheck={this.handleCheck}
            />
          ))}
        </ul>
        <Button
          danger
          text="Increment number"
          clickBehavior={() => console.log("a")}
        />
      </React.Fragment>
    );
  }
}
