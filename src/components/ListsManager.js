import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ColorSelector from "./basics/ColorSelector";
import { AddList } from "./AddList";

import addList from "../redux/actionCreators/addList";
import changeListColor from "../redux/actionCreators/changeListColor";
import selectList from "../redux/actionCreators/selectList";

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
        <StyledH3>Lists:</StyledH3>
        <ul>
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
        </ul>
      </React.Fragment>
    );
  }
}

// styled components
const StyledH3 = styled("h3")`
  margin-bottom: 10px;
`;

const StyledList = styled("li")`
  position: relative;
  margin: 0 2%;
  display: inline-block;
  max-width: 150px;
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
