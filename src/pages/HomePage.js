import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { listColors } from "../assets/globalStyles";

import Reminders from "../components/Reminders";
import ListsManager from "../components/ListsManager";

import { randomId } from "../assets/helpers";


import selectList from "../redux/actionCreators/selectList";

class HomePage extends React.Component {
  state = {
    completeListLayoutNum: 0
  };

  componentWillMount() {
    this.props.handleSelectList(1);
    setTimeout(function(){
      this.completeListLayout()
    }.bind(this), 0);
  }

  getCurrentList = () => {
    return this.props.lists.filter(
      list => list.id === this.props.activeList
    )[0];
  };

  completeListLayout = () => {
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

  updateList = list => {
    let mockLists = [...this.props.lists];
    mockLists[mockLists.findIndex(key => key.id == list.id)].id = list.id;
    this.setState({ mock_lists: mockLists });
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
            completeListLayoutNum={this.state.completeListLayoutNum}
            completeListLayout={this.completeListLayout}
            updateList={this.updateList}
          />
          <ListsManager completeListLayout={this.completeListLayout} />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = ({ lists, activeList }) => ({
  lists, activeList
});


const mapDispatchToProps = dispatch => ({
  handleSelectList(listId) {
    dispatch(selectList(listId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
