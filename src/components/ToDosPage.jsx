import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { mobileBreakpoint } from "../assets/globalStyles";

import { fetchToDos } from "../redux/actionCreators/fetchToDos";

import Loading from "./basics/Loading";
import Notification from "./Notification";
import ToDos from "./ToDos";
import ListsManager from "./ListsManager";
import NoToDos from "./NoToDos";

class ToDosPage extends React.PureComponent {
  state = {
    completeListLayoutNum: 0,
    showDetails: false,
    detailsTask: {},
    sortBy: "most-important",
    filterChecked: false
  };

  componentDidMount() {
    this.props.handleFetchToDos(this.props.user.uid);
    if (
      this.props.lists != "loading" &&
      Object.keys(this.props.lists).length > 0
    ) {
      this.completeListLayout();
      this.getNextListIdToShowAfterDeleteCurrentList();
    }
  }

  getCurrentList = () => {
    let lists = { ...this.props.lists };

    let currList = Object.keys(lists).filter(
      list => lists[list].id === this.props.activeList
    );

    let items = lists[currList].items;
    let itemsArray = [];
    Object.keys(items)
      .filter(item => !items[item].hasOwnProperty("ignoreMe"))
      .map(itemKey => itemsArray.push(items[itemKey]));

    itemsArray = this.sortBy(itemsArray);

    lists[currList].items = itemsArray;

    return lists[currList];
  };

  sortBy = itemsArray => {
    switch (this.state.sortBy) {
      case "most-important": {
        itemsArray.sort(function(a, b) {
          return b.priority - a.priority;
        });
        break;
      }
      case "remind-me": {
        let noEndDate = itemsArray.filter(item => item.end_date === "");
        let withEndDateActive = itemsArray.filter(
          item => item.end_date != "" && item.reminder_set
        );
        let withEndDateInactive = itemsArray.filter(
          item => item.end_date != "" && !item.reminder_set
        );
        withEndDateActive.sort(function(a, b) {
          return new Date(a.end_date) - new Date(b.end_date);
        });
        withEndDateInactive.sort(function(a, b) {
          return new Date(a.end_date) - new Date(b.end_date);
        });
        itemsArray = withEndDateActive.concat(withEndDateInactive, noEndDate);
        break;
      }
      case "alphabetically-a-z": {
        itemsArray.sort(function(a, b) {
          var nameA = a.task.toLowerCase(),
            nameB = b.task.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        break;
      }
      case "alphabetically-z-a": {
        itemsArray.sort(function(a, b) {
          var nameA = a.task.toLowerCase(),
            nameB = b.task.toLowerCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
        break;
      }
      case "newest": {
        itemsArray.sort(function(a, b) {
          return new Date(b.start_date) - new Date(a.start_date);
        });
        break;
      }
      case "oldest": {
        itemsArray.sort(function(a, b) {
          return new Date(a.start_date) - new Date(b.start_date);
        });
        break;
      }

      default:
        itemsArray;
    }
    return itemsArray;
  };

  completeListLayout = () => {
    let currList = this.getCurrentList();
    let containerHeight = document.querySelector("#to-dos").clientHeight;
    let itemHeight = 77;
    let maxItems = Math.floor(containerHeight / itemHeight);
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

  showDetailsFunc = (showDetails, detailsTaskId) => {
    setTimeout(() => {
      let items = this.getCurrentList().items;
      let itemsArray = [];
      Object.keys(items).map(itemKey => itemsArray.push(items[itemKey]));
      let detailsTask = itemsArray.filter(item => item.id === detailsTaskId)[0];
      this.setState({ showDetails, detailsTask }, () => {});
    }, 0);
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
      <React.Fragment>
        <Notification lists={this.props.lists} />
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
                detailsTask={this.state.detailsTask}
                sortBy={this.state.sortBy}
                handleSortByChange={this.handleSortByChange}
              />
              <ListsManager completeListLayout={this.completeListLayout} />
            </React.Fragment>
          ) : (
            <NoToDos />
          )}
        </StyledContainer>
      </React.Fragment>
    );
  }
}

// propTypes
ToDosPage.propTypes = {
  handleFetchToDos: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string,
  ]),
  lists: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string,
  ]),
  activeList: PropTypes.string.isRequired
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
  @media (${mobileBreakpoint}) {
    margin: 10px auto;
  }
  &.expanded {
    animation: ${expandsToDoOuter} 0.25s ease forwards;
  }
  &.compressed {
    animation: ${compressToDoOuter} 0.25s ease forwards;
  }
  @media (${mobileBreakpoint}) {
    width: 90%;
    &.expanded {
      animation: none;
    }
    &.compressed {
      animation: none;
    }
  }
  h2 {
    text-transform: capitalize;
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const mapStateToProps = ({ lists, activeList, user }) => ({
  lists,
  activeList,
  user
});

const mapDispatchToProps = dispatch => ({
  handleFetchToDos(userId) {
    dispatch(fetchToDos(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDosPage);
