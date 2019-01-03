import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import addItem from "../../redux/actionCreators/addItem";

import { colors } from "../../assets/globalStyles";
import { lighten } from "polished";

class SimpleTextArea extends React.Component {
  state = {
    inputValue: this.props.initialValue
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleBlur = () => {
    this.props.getInputValue(this.state.inputValue);
  };

  render() {
    return (
      <StyledTextArea
        type="text"
        placeholder={this.props.inputPlaceholder}
        value={this.state.inputValue}
        onChange={e => this.handleChange(e)}
        onBlur={() => this.handleBlur()}
      />
    );
  }
}

// styled components
const StyledTextArea = styled("textarea")`
  resize: none;
  background: ${colors.light};
  position: relative;
  text-align: left;
  margin-bottom: 5px;
  border: 0;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 120px;
`;

const mapDispatchToProps = dispatch => ({
  handleAddItem(newItem, listId) {
    dispatch(addItem(newItem, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SimpleTextArea);
