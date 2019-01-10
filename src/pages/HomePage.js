import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import selectList from "../redux/actionCreators/selectList";

import ToDos from "../components/ToDos";
import ListsManager from "../components/ListsManager";
import NoToDos from "../components/NoToDos";

class HomePage extends React.PureComponent {
  state = {
    completeListLayoutNum: 0,
    showDetails: false,
    sortBy: "most-important",
    filterChecked: false
  };

  componentDidMount() {
    if (this.props.lists.length > 0) {
      this.completeListLayout();
      this.getNextListIdToShowAfterDeleteCurrentList();
    }
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

  getNextListIdToShowAfterDeleteCurrentList = () => {
    let lists = this.props.lists;
    let currList = lists.filter(list => list.id === this.props.activeList)[0];
    let listsLength = lists.length - 1;
    let nextListIndex = lists.indexOf(currList) + 1;

    let nextList =
      nextListIndex > listsLength
        ? lists.filter((list, i) => i === 0)[0].id
        : lists.filter((list, i) => i === nextListIndex)[0].id;

    return nextList;
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

  filterCheckedFunc = () => {
    this.setState({ filterChecked: !this.state.filterChecked }),
      () => {
        this.getCurrentList();
      };
  };

  render() {
    return (
      <div className="home">
        <StyledContainer
          className={this.state.showDetails ? "expanded" : "compressed"}
        >
          {this.props.lists.length > 0 ? (
            <React.Fragment>
              <ToDos
                currentList={this.getCurrentList()}
                nextListId={this.getNextListIdToShowAfterDeleteCurrentList()}
                filterCheckedFunc={this.filterCheckedFunc}
                filterChecked={this.state.filterChecked}
                completeListLayoutNum={this.state.completeListLayoutNum}
                completeListLayout={this.completeListLayout}
                showDetails={this.state.showDetails}
                showDetailsFunc={this.showDetailsFunc}
                sortBy={this.state.sortBy}
                handleSortByChange={this.handleSortByChange}
              />
              <ListsManager completeListLayout={this.completeListLayout} />
            </React.Fragment>
          ) : (
            <NoToDos />
          )}
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
