import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";


import ColorSelector from "./basics/ColorSelector";
import { AddList } from "./AddList";

import addList from "../redux/actionCreators/addList";
import changeListColor from "../redux/actionCreators/changeListColor";
import selectList from "../redux/actionCreators/selectList";
import { colors } from "../assets/globalStyles";

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
  render() {
    return (
      <React.Fragment>
        <h3>Lists:</h3>
        <StyledUl>
          {Object.keys(this.props.lists).map((list, i) => (
            <StyledList key={i}>
              <StyledButton
                className="color-wrapper"
                mainColor={this.props.lists[list].color}
                onClick={() => this.handleSelectList(this.props.lists[list].id)}
              >
                <div className="info-wrapper">
                  <span>{this.props.lists[list].list}</span>
                  <ColorSelector
                    list={this.props.lists[list].list}
                    handleColorChange={this.props.handleColorChange}
                  />
                </div>
              </StyledButton>
            </StyledList>
          ))}
          <AddList clickBehavior={this.props.handleAddList} text="+" />
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
    background-color:  ${colors.primary};
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
  handleAddList(newList, newColor) {
    dispatch(addList(newList, newColor));
  },
  handleColorChange(listName, newColor) {
    dispatch(changeListColor(listName, newColor));
  },
  handleSelectList: listId => {
    dispatch(selectList(listId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsManager);
