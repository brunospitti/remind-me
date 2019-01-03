import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import addItem from "../../redux/actionCreators/addItem";

import { colors } from "../../assets/globalStyles";

class SimpleInput extends React.Component {
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
      <StyledInput
        maxLength="35"
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
const StyledInput = styled("input")`
  position: relative;
  text-align: left;
  background: ${colors.light};
  width: 100%;
  margin-bottom: 5px;
  border: 0;
  padding: 15px 10px;
`;

const mapDispatchToProps = dispatch => ({
  handleAddItem(newItem, listId) {
    dispatch(addItem(newItem, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SimpleInput);
