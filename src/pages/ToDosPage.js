import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import selectList from "../redux/actionCreators/selectList";
import { fetchToDos } from "../redux/actionCreators/fetchToDos";

import ToDos from "../components/ToDos";
import ListsManager from "../components/ListsManager";
import NoToDos from "../components/NoToDos";
import Loading from "../components/basics/Loading";
import { currTime } from "../assets/helpers";

class ToDosPage extends React.PureComponent {
  state = {
    completeListLayoutNum: 0,
    showDetails: false,
    sortBy: "most-important",
    filterChecked: false
  };

  componentDidMount() {
    console.log(currTime())
    this.props.handleFetchToDos();
    if (
      this.props.lists != "loading" &&
      Object.keys(this.props.lists).length > 0
    ) {
      this.completeListLayout();
      this.getNextListIdToShowAfterDeleteCurrentList();
    }
  }

  sortBy = (itemsArray) => {
    if (this.state.sortBy === "most-important") {
      itemsArray.sort(function(a, b) {
        return b.priority - a.priority;
      });
    } else if (this.state.sortBy === "alphabetically-a-z") {
      itemsArray.sort(function(a, b) {
        var nameA = a.task.toLowerCase(),
          nameB = b.task.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (this.state.sortBy === "alphabetically-z-a") {
      itemsArray.sort(function(a, b) {
        var nameA = a.task.toLowerCase(),
          nameB = b.task.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return 1;
        if (nameA > nameB) return -1;
        return 0; //default return value (no sorting)
      });
    } else if (this.state.sortBy === "newest") {
      itemsArray.sort(function(a, b) {
        return new Date(b.start_date) - new Date(a.start_date);
      });
    } else if (this.state.sortBy === "oldest") {
      itemsArray.sort(function(a, b) {
        return new Date(a.start_date) - new Date(b.start_date);
      });
    }

    return itemsArray
  }

  getCurrentList = () => {
    let lists = { ...this.props.lists };
    let currList = Object.keys(lists).filter(
      list => lists[list].id === this.props.activeList
    );
    let items = lists[currList].items;
    let itemsArray = []
    Object.keys(items).filter(item => !items[item].hasOwnProperty('ignoreMe')).map(itemKey => itemsArray.push(items[itemKey]))

    this.sortBy(itemsArray)

    lists[currList].items = itemsArray;

    return lists[currList];
  };

  completeListLayout = () => {
    let currList = this.getCurrentList();
    let containerHeight = document.querySelector("#to-dos").clientHeight;
    let itemHeight =
      currList.items.length > 0
        ? document.querySelector("#single-to-do").clientHeight
        : 61;
    let maxItems = Math.floor(containerHeight / itemHeight) - 1;
    if (currList.items.length < maxItems) {
      let completeListLayoutNum = maxItems - currList.items.length;
      this.setState({ completeListLayoutNum }, () => {});
    } else {
      this.setState({ completeListLayoutNum: 0 }, () => {});
    }
  };

  getNextListIdToShowAfterDeleteCurrentList = () => {
    let lists = { ...this.props.lists };
    let currList = Object.keys(lists).filter(
      list => lists[list].id === this.props.activeList
    )[0];
    let listsLength = Object.keys(this.props.lists).length - 1;
    let nextListIndex = Object.keys(lists).indexOf(currList) + 1;
    let nextList =
      nextListIndex > listsLength
        ? lists[Object.keys(lists)[0]].id
        : lists[Object.keys(lists)[nextListIndex]].id;

    return nextList;
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
      <StyledContainer
        className={this.state.showDetails ? "expanded" : "compressed"}
      >
        {this.props.lists === "loading" ? (
          <Loading />
        ) : Object.keys(this.props.lists).length > 0 ? (
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
  },
  handleFetchToDos() {
    dispatch(fetchToDos());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDosPage);
