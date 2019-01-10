import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten, darken } from "polished";

import { colors } from "../assets/globalStyles";

import editListName from "../redux/actionCreators/editListName";
import deleteList from "../redux/actionCreators/deleteList";

import Sort from "./basics/Sort";
import SimpleInput from "./basics/SimpleInput";
import { Button } from "./basics/Button";
import SingleToDo from "./SingleToDo";
import SingleToDoDetails from "./SingleToDoDetails";
import AddItem from "./AddItem";

class ToDos extends React.Component {
  state = {
    detailsTask: "",
    showToDoOptions: false,
    showDetailsEditItems: false,
    showEditListName: false
  };

  componentDidMount() {
    let items = [...this.props.currentList.items];
    items.sort(function(a, b) {
      return new Date(b.start_date) - new Date(a.start_date);
    });
  }

  handleEditList = inputValue => {
    if (inputValue.length > 3) {
      this.props.handleEditListName(this.props.currentList.id, inputValue);
    } else {
      alert("List name should be longer than 3 letters");
    }
    this.setState({ showEditListName: false });
  };

  deleteList = () => {
    this.props.handleDeleteList(
      this.props.currentList.id,
      this.props.nextListId
    );
  };

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

  showEditListNameFunc = () => {
    this.setState({ showEditListName: true });
  };

  numberOfCheckedItems = () => {
    let checkedItems = this.props.currentList.items.filter(
      item => item.checked
    );
    return checkedItems.length;
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showEditListName ? (
          <StyledSimpleInput
            className={this.props.className}
            autoFocus={true}
            getInputValue={this.handleEditList}
            initialValue={this.props.currentList.list}
            inputPlaceholder="List name"
          />
        ) : (
          <StyledFakeInputField onClick={() => this.showEditListNameFunc()}>
            <span>{this.props.currentList.list}</span>
          </StyledFakeInputField>
        )}
        <Button
          icon="deleteIcon"
          clickBehavior={() => this.deleteList()}
          text="Delete"
        />
        <Sort
          sortBy={this.props.sortBy}
          handleSortByChange={this.props.handleSortByChange}
        />
        <StyledTodoHolder>
          <StyledFilterChecked onClick={() => this.props.filterCheckedFunc()}>
            {this.props.filterChecked
              ? `Show checked items - (${this.numberOfCheckedItems()})`
              : `Hide checked items - (${this.numberOfCheckedItems()})`}
          </StyledFilterChecked>
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
                  showItem={this.props.filterChecked ? false : true}
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

const StyledFilterChecked = styled("div")`
  width: 100%;
  display: block;
  padding: 12px 40px;
  background: ${colors.light};
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: ${darken(0.02, colors.light)};
  }
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

const StyledFakeInputField = styled("div")`
  display: inline-block;
  width: 250px;
  margin-bottom: 29px;
  span {
    font-size: 2em;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

const StyledSimpleInput = styled(SimpleInput)`
  width: 250px;
  font-size: 2em;
  text-transform: capitalize;
  border-bottom: 1px solid white;
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${colors.lightGrey};
  }
`;

const mapDispatchToProps = dispatch => ({
  handleEditListName(listId, newName) {
    dispatch(editListName(listId, newName));
  },
  handleDeleteList(listId, nextListId) {
    dispatch(deleteList(listId, nextListId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ToDos);
