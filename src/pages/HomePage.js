import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import { listColors } from "../assets/globalStyles";

import ToDos from "../components/ToDos";
import ListsManager from "../components/ListsManager";

import { randomId } from "../assets/helpers";

import selectList from "../redux/actionCreators/selectList";

class HomePage extends React.Component {
  state = {
    completeListLayoutNum: 0,
    showDetails: false,
    sortBy: "most-important"
  };

  componentDidMount() {
    this.completeListLayout();
  }

  getCurrentList = () => {
    let lists = [...this.props.lists];
    let currList = lists.filter(list => list.id === this.props.activeList)[0];
    let items = currList.items;

    if (this.state.sortBy === "most-important") {
      items.sort(function(a, b) {
        return b.priority - a.priority;
      });
    } else if (this.state.sortBy === "alphabetically-a-z") {
      items.sort(function(a, b) {
        var nameA = a.task.toLowerCase(),
          nameB = b.task.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (this.state.sortBy === "alphabetically-z-a") {
      items.sort(function(a, b) {
        var nameA = a.task.toLowerCase(),
          nameB = b.task.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return 1;
        if (nameA > nameB) return -1;
        return 0; //default return value (no sorting)
      });
    } else if (this.state.sortBy === "newest") {
      items.sort(function(a, b) {
        return new Date(b.start_date) - new Date(a.start_date);
      });
    } else if (this.state.sortBy === "oldest") {
      items.sort(function(a, b) {
        return new Date(a.start_date) - new Date(b.start_date);
      });
    }

    return currList;
  };

  completeListLayout = () => {
    let currState = this.getCurrentList();
    let containerHeight = document.querySelector("#to-dos").clientHeight;
    let itemHeight =
      currState.items.length > 0
        ? document.querySelector("#single-to-do").clientHeight
        : 61;
    let maxItems = Math.floor(containerHeight / itemHeight) - 1;
    if (currState.items.length < maxItems) {
      let completeListLayoutNum = maxItems - currState.items.length;
      this.setState({ completeListLayoutNum }, () => {});
    } else {
      this.setState({ completeListLayoutNum: 0 }, () => {});
    }
  };

  showDetailsFunc = showDetails => {
    this.setState({ showDetails });
  };

  handleSortByChange = sortBy => {
    this.setState({ sortBy }, () => {});
  };

  render() {
    return (
      <div className="home">
        <StyledContainer
          className={this.state.showDetails ? "expanded" : "compressed"}
        >
          <ToDos
            currentList={this.getCurrentList()}
            completeListLayoutNum={this.state.completeListLayoutNum}
            completeListLayout={this.completeListLayout}
            showDetails={this.state.showDetails}
            showDetailsFunc={this.showDetailsFunc}
            sortBy={this.state.sortBy}
            handleSortByChange={this.handleSortByChange}
          />
          <ListsManager completeListLayout={this.completeListLayout} />
        </StyledContainer>
      </div>
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

const StyledContainer = styled("div")`
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
    text-transform: capitalize;
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const mapStateToProps = ({ lists, activeList }) => ({
  lists,
  activeList
});

const mapDispatchToProps = dispatch => ({
  handleSelectList(listId) {
    dispatch(selectList(listId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
