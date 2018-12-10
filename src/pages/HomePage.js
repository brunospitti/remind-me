import React from "react";
import styled from "styled-components";

import { listColors } from "../assets/globalStyles";

import Reminders from "../components/Reminders";
import ListsManager from "../components/ListsManager";
import { defaultLabels, mock_lists } from "../assets/mock_data";

export default class HomePage extends React.Component {
  state = {
    defaultLabels,
    mock_lists,
    currentList: {},
    mock_id: 2,
    completeListLayoutNum: 0
  };

  componentWillMount() {
    this.selectList(2);
  }

  getLists = () => {
    let mockLists = this.state.mock_lists.map(list => ({
      list: list.list,
      color: list.color,
      id: list.id
    }));
    return mockLists;
  };

  getCurrentList = () => {
    return this.state.mock_lists.filter(
      list => list.id === this.state.currentList
    )[0];
  };

  handleColorChange = (list, color) => {
    let mockLists = this.state.mock_lists;
    mockLists[mockLists.findIndex(key => key.list == list)].color =
      listColors[color];
    this.setState({ mock_lists: mockLists });
  };

  addList = (newList, newColor) => {
    let mock_lists = [...this.state.mock_lists];
    mock_lists.push({
      list: newList,
      color: listColors[newColor],
      id: this.state.mock_id + 1,
      items: []
    });
    this.setState({ mock_lists });
  };

  updateList = list => {
    let mockLists = [...this.state.mock_lists];
    mockLists[mockLists.findIndex(key => key.id == list.id)].id = list.id;
    this.setState({ mock_lists: mockLists });
  };

  selectList = listId => {
    let currentList = mock_lists.filter(list => list.id === listId);
    currentList = currentList[0].id;
    this.setState({ currentList }, () => {
      this.completeListLayout();
    });
  };

  completeListLayout() {
    let currState = this.getCurrentList();
    if (currState.items.length < 7) {
      let completeListLayoutNum = 7 - currState.items.length;
      this.setState({ completeListLayoutNum }, () => {});
    } else {
      this.setState({ completeListLayoutNum: 0 }, () => {});
    }
  }

  addItem = itemToAdd => {
    let currState = [...this.state.mock_lists];
    let currList = this.getCurrentList();
    let randomId = Math.random()
      .toString(36)
      .slice(-8);
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

    this.setState({ mock_lists: currState });
  };

  deleteItem = itemToDelete => {
    let currState = [...this.state.mock_lists];
    let currList = this.getCurrentList();
    let currListItems = currState.filter(list => list.id === currList.id)[0]
      .items;
    let currItem = currListItems.filter(item => item.id === itemToDelete)[0];

    let itemIndex = currListItems.indexOf(currItem);
    if (itemIndex > -1) {
      currListItems.splice(itemIndex, 1);
    }

    this.setState({ mock_lists: currState });
  };

  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Reminders
            mock_lists={this.state.mock_lists}
            currentList={this.getCurrentList()}
            updateList={this.updateList}
            completeListLayoutNum={this.state.completeListLayoutNum}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
          />
          <ListsManager
            lists={this.getLists()}
            handleColorChange={this.handleColorChange}
            addList={this.addList}
            selectList={this.selectList}
          />
        </React.Fragment>
      </div>
    );
  }
}
