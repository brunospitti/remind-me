import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";

import {addList} from "../redux/actionCreators/addList";
import changeListColor from "../redux/actionCreators/changeListColor";
import selectList from "../redux/actionCreators/selectList";

import ColorSelector from "./basics/ColorSelector";
import AddList from "./AddList";

class ListsManager extends React.PureComponent {

  handleSelectList = listId => {
    this.props.handleSelectList(listId);
    setTimeout(
      function() {
        this.props.completeListLayout();
      }.bind(this),
      0
    );
  };

  sortByCreationDate = () => {
    let {lists} = this.props;
    let listsArray = [];
    Object.keys(lists).map(list => listsArray.push(lists[list]));

    listsArray.sort(function(a, b) {
      return new Date(a.creation_date) - new Date(b.creation_date);
    });

    return listsArray;
  }

  render() {
    return (
      <React.Fragment>
        <h3>Lists:</h3>
        <StyledUl>
          {this.sortByCreationDate().map((list, i) => (
            <StyledList key={i}>
              <StyledButton
                className="color-wrapper"
                mainColor={list.color}
                onClick={() => this.handleSelectList(list.id)}
              >
                <div className="info-wrapper">
                  <span>{list.name}</span>
                  <ColorSelector
                    list={list}
                    handleColorChange={this.props.handleColorChange}
                  />
                </div>
              </StyledButton>
            </StyledList>
          ))}
          <AddList
            autoFocus={false}
            clickBehavior={this.props.handleAddList}
            text="+"
          />
        </StyledUl>
      </React.Fragment>
    );
  }
}

// styled components
const StyledUl = styled("ul")`
  overflow-x: auto;
  max-width: 100%;
  white-space: nowrap;
  height: 100px;
  padding-top: 15px;
  &::-webkit-scrollbar-track {
    background-color: ${lighten(0.5, colors.primary)};
  }

  &::-webkit-scrollbar {
    height: 6px;
    background-color: ${lighten(0.5, colors.primary)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
  }
`;

const StyledList = styled("li")`
  margin: 0 2%;
  display: inline-block;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
  span {
    text-transform: capitalize;
    font-size: 1.2em;
  }
`;

const StyledButton = styled("button")`
  background: white;
  border: 0;
  width: 100%;
  cursor: pointer;
  height: 50px;
  margin-bottom: 10px;
  border-bottom: 6px solid ${props => props.mainColor};
  transition: 0.2s all ease;
  &:hover {
    border-bottom-width: 10px;
  }
`;

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  handleAddList(newList, newColor, userId) {
    dispatch(addList(newList, newColor, userId));
  },
  handleColorChange(listId, newColor) {
    dispatch(changeListColor(listId, newColor));
  },
  handleSelectList: listId => {
    dispatch(selectList(listId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsManager);
