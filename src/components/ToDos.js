import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";

import Sort from "./basics/Sort";
import SingleToDo from "./SingleToDo";
import SingleToDoDetails from "./SingleToDoDetails";
import AddItem from "./AddItem";

export default class ToDos extends React.Component {
  state = {
    detailsTask: "",
    showToDoOptions: false,
    showDetailsEditItems: false
  };

  componentDidMount() {
    let items = [...this.props.currentList.items];
    items.sort(function(a, b) {
      return new Date(b.start_date) - new Date(a.start_date);
    });
    // console.log(items);
  }

  itemListDetails = task => {
    this.setState(
      {
        detailsTask: task,
        showDetailsEditItems: false
      },
      () => {
        this.props.showDetailsFunc(true);
      }
    );
  };

  closeDetails = () => {
    this.setState({ detailsTask: {} }, () => {
      this.props.showDetailsFunc(false);
    });
  };

  showToDoOptionsFunc = (taskId, toggle) => {
    this.setState({ showToDoOptions: `${toggle},${taskId}` });
  };

  showDetailsEditItemsFunc = () => {
    this.setState({ showDetailsEditItems: true });
  };

  render() {
    return (
      <React.Fragment>
        <h2>{this.props.currentList.list}</h2>
        <Sort
          sortBy={this.props.sortBy}
          handleSortByChange={this.props.handleSortByChange}
        />
        <StyledTodoHolder>
          <StyledToDo
            id="to-dos"
            mainColor={this.props.currentList.color}
            toDoWidth={this.props.showDetails ? "55%" : "100%"}
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
              <AddItem
                addItem={this.props.addItem}
                listId={this.props.currentList.id}
                completeListLayout={this.props.completeListLayout}
              />
              {[...Array(this.props.completeListLayoutNum)].map((e, i) => (
                <li key={i} className={i === 0 ? "first-fake" : null} />
              ))}
            </ul>
          </StyledToDo>
          {this.props.showDetails && (
            <SingleToDoDetails
              task={this.state.detailsTask}
              showDetailsEditItems={this.state.showDetailsEditItems}
              showDetailsEditItemsFunc={this.showDetailsEditItemsFunc}
              itemListDetails={this.itemListDetails}
              mainColor={this.props.currentList.color}
              closeDetails={this.closeDetails}
              showToDoOptionsFunc={this.showToDoOptionsFunc}
              listId={this.props.currentList.id}
              completeListLayout={this.props.completeListLayout}
            />
          )}
        </StyledTodoHolder>
      </React.Fragment>
    );
  }
}

// styled components
const StyledTodoHolder = styled("div")`
  display: block;
  position: relative;
  margin-bottom: 4vh;
`;

const StyledToDo = styled("div")`
  padding: 0 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px ${colors.lightGrey};
  background: ${lighten(0.025, colors.light)};
  height: 55vh;
  overflow-x: auto;
  width: ${props => props.toDoWidth};
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
  > ul > li {
    position: relative;
    height: 61px;
    border-bottom: 1px solid ${lighten(0.2, colors.lightGrey)};
    &.first-fake {
      border-top: 1px solid ${lighten(0.2, colors.lightGrey)};
    }
  }
`;
