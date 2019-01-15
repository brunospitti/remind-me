import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";

import {addList} from "../redux/actionCreators/addList";

import { Button } from "./basics/Button";
import { AddList } from "./AddList";

class NoToDos extends React.PureComponent {
  state = {
    showAddList: false
  };

  handleAddList = (newList, newColor) => {
    this.props.handleAddList(newList, newColor);
    this.setState({ showAddList: false });
  };

  render() {
    return (
      <StyledNoToDos>
        {this.state.showAddList ? (
          <AddList
            autoFocus={true}
            clickBehavior={this.handleAddList}
            text="+"
          />
        ) : (
          <React.Fragment>
            <h2>Create your first list</h2>
            <Button
              className="footer-item"
              icon="addIcon"
              clickBehavior={() => this.setState({ showAddList: true })}
              text="Create list"
            />
          </React.Fragment>
        )}
      </StyledNoToDos>
    );
  }
}

// styled components
const StyledNoToDos = styled("div")`
  padding: 0 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px ${colors.lightGrey};
  background: ${lighten(0.025, colors.light)};
  height: 55vh;
  overflow-x: auto;
  width: 100%;
  text-align: center;
  h2 {
    margin-top: 15vh;
  }
  button {
    padding: 0;
    margin: 1vh auto;
    svg {
      width: 80px;
      height: 80px;
    }
  }
  form {
    margin-top: 18vh;
  }
`;

const mapDispatchToProps = dispatch => ({
  handleAddList(newList, newColor) {
    dispatch(addList(newList, newColor));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NoToDos);
