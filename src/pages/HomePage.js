import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { listColors } from "../assets/globalStyles";

import Reminders from "../components/Reminders";
import ListsManager from "../components/ListsManager";
import { defaultLabels, mock_lists } from "../assets/mock_data";

class HomePage extends React.Component {
  state = {
    defaultLabels,
    mock_lists,
    currentList: "",
    completeListLayoutNum: 0
  };

  randomId = () =>
    Math.random()
      .toString(36)
      .slice(-10);

  componentWillMount() {
    this.selectList(1);
  }

  getCurrentList = () => {
    return this.props.lists.filter(
      list => list.id === this.state.currentList
    )[0];
  };

  updateList = list => {
    let mockLists = [...this.props.lists];
    mockLists[mockLists.findIndex(key => key.id == list.id)].id = list.id;
    this.setState({ mock_lists: mockLists });
  };

  selectList = listId => {
    let currentList = this.props.lists.filter(list => list.id === listId)[0];
    currentList = currentList.id;
    this.setState({ currentList }, () => {
      this.completeListLayout();
    });
  };

  completeListLayout() {
    let currState = this.getCurrentList();
    let containerHeight = document.querySelector("#reminders").clientHeight;
    let itemHeight =
      currState.items.length > 0
        ? document.querySelector("#single-reminder").clientHeight
        : 61;
    let maxItems = Math.floor(containerHeight / itemHeight) - 1;
    if (currState.items.length < maxItems) {
      let completeListLayoutNum = maxItems - currState.items.length;
      this.setState({ completeListLayoutNum }, () => {});
    } else {
      this.setState({ completeListLayoutNum: 0 }, () => {});
    }
  }

  addItem = itemToAdd => {
    let currState = [...this.props.lists];
    let currList = this.getCurrentList();
    let randomId = this.randomId();
    let currTime = new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0];

    currState.filter(list => list.id === currList.id)[0].items.push({
      id: randomId,
      task: itemToAdd,
      start_date: currTime,
      end_date: "",
      checked: false,
      labels: []
    });

    this.setState({ mock_lists: currState }, () => {
      this.completeListLayout();
    });
  };

  deleteItem = itemToDelete => {
    let currState = [...this.props.lists];
    let currList = this.getCurrentList();
    let currListItems = currState.filter(list => list.id === currList.id)[0]
      .items;
    let currItem = currListItems.filter(item => item.id === itemToDelete)[0];

    let itemIndex = currListItems.indexOf(currItem);
    if (itemIndex > -1) {
      currListItems.splice(itemIndex, 1);
    }

    this.setState({ mock_lists: currState }, () => {
      this.completeListLayout();
    });
  };

  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Reminders
            currentList={this.getCurrentList()}
            updateList={this.updateList}
            completeListLayoutNum={this.state.completeListLayoutNum}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
          />
          <ListsManager selectList={this.selectList} />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = ({ lists }) => ({
  lists
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
