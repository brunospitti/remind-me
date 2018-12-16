import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ColorSelector from "./basics/ColorSelector";
import { SingleInput } from "./basics/SingleInput";

import addList from "../redux/actionCreators/addList";
import changeListColor from "../redux/actionCreators/changeListColor";

const StyledH3 = styled("h3")`
  margin-bottom: 10px;
`;

const StyledList = styled("li")`
  position: relative;
  margin: 0 2%;
  display: inline-block;
  width: 15%;
  max-width: 150px;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
  .info-wrapper {
    background: white;
  }
`;

const StyledButton = styled("button")`
  border: 0;
  width: 100%;
  cursor: pointer;
  height: 50px;
  margin-bottom: 10px;
`;

const ListsManager = props => (
  <React.Fragment>
    <StyledH3>Lists:</StyledH3>
    <ul>
      {Object.keys(props.lists).map((list, i) => (
        <StyledList key={i}>
          <StyledButton
            className="color-wrapper"
            style={{ backgroundColor: props.lists[list].color }}
            onClick={() => props.selectList(props.lists[list].id)}
          />
          <div className="info-wrapper">
            <span>{props.lists[list].list}</span>
            <ColorSelector
              list={props.lists[list].list}
              handleColorChange={props.handleColorChange}
            />
          </div>
        </StyledList>
      ))}
      <SingleInput clickBehavior={props.handleAddList} text="+" />
    </ul>
  </React.Fragment>
);

const mapStateToProps = ({ lists }) => ({
  lists
});

const mapDispatchToProps = dispatch => ({
  handleAddList(newList, newColor) {
    dispatch(addList(newList, newColor));
  },
  handleColorChange(listName, newColor) {
    dispatch(changeListColor(listName, newColor));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsManager);
