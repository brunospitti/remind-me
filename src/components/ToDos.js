import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";

import SingleToDo from "./SingleToDo";
import SingleToDoDetails from "./SingleToDoDetails";
import AddItem from "./AddItem";

export default class ToDos extends React.Component {
  state = {
    showDetails: false,
    detailsId: "",
    showToDoOptions: false
  };

  itemListDetails = taskId => {
    this.setState({ showDetails: true, detailsId: taskId });
  };

  closeDetails = () => {
    this.setState({ showDetails: false, detailsId: "" });
  };

  getTaskFromId = taskId => {
    let currState = this.props.currentList;
    let currTask = currState.items.find(x => x.id === taskId);
    return currTask;
  };

  showToDoOptionsFunc = (taskId, toggle) => {
    this.setState({ showToDoOptions: `${toggle},${taskId}` });
  };

  render() {
    return (
      <React.Fragment>
        <StyledToDoOuter
          className={this.state.showDetails ? "expanded" : "compressed"}
        >
          <h2>{this.props.currentList.list}</h2>
          <StyledToDo
            id="to-dos"
            mainColor={this.props.currentList.color}
          >
            <ul>
              {this.props.currentList.items.map(task => (
                <SingleToDo
                  key={task.id}
                  task={task}
                  itemListDetails={this.itemListDetails}
                  mainColor={this.props.currentList.color}
                  showToDoOptionsFunc={this.showToDoOptionsFunc}
                  showToDoOptions={
                    `true,${task.id}` === this.state.showToDoOptions &&
                    this.state.showToDoOptions
                  }
                  listId={this.props.currentList.id}
                  completeListLayout={this.props.completeListLayout}
                />
              ))}
              <AddItem addItem={this.props.addItem} listId={this.props.currentList.id} completeListLayout={this.props.completeListLayout}/>
              {[...Array(this.props.completeListLayoutNum)].map((e, i) => (
                <li key={i} className={i === 0 ? "first-fake" : null} />
              ))}
            </ul>
          </StyledToDo>
          {this.state.showDetails && (
            <SingleToDoDetails
              task={this.getTaskFromId(this.state.detailsId)}
              itemListDetails={this.itemListDetails}
              mainColor={this.props.currentList.color}
              closeDetails={this.closeDetails}
              showToDoOptionsFunc={this.showToDoOptionsFunc}
              listId={this.props.currentList.id}
              completeListLayout={this.props.completeListLayout}
            />
          )}
        </StyledToDoOuter>
      </React.Fragment>
    );
  }
}

// styled components
const expandsToDoOuter = keyframes`
  0% {
    width: 60%;
  }
  100% {
    width: 80%;
  }
`;

const compressToDoOuter = keyframes`
  0% {
    width: 80%;
  }
  100% {
    width: 60%;
  }
`;

const StyledToDoOuter = styled("div")`
  width: 60%;
  margin: 30px auto;
  position: relative;
  transition: all 0.25s ease;
  &.expanded {
    animation: ${expandsToDoOuter} 0.25s ease forwards;
  }
  &.compressed {
    animation: ${compressToDoOuter} 0.25s ease forwards;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const StyledToDo = styled("div")`
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
  > li {
    position: relative;
    height: 61px;
    border-bottom: 1px solid ${lighten(0.2, colors.lightGrey)};
    &.first-fake {
      border-top: 1px solid ${lighten(0.2, colors.lightGrey)};
    }
  }
`;
