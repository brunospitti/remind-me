import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export default class EditItem extends React.PureComponent {
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
        type="text"
        placeholder="Insert new item"
        value={this.state.inputValue}
        onChange={e => this.handleChange(e)}
        onBlur={() => this.handleBlur()}
      />
    );
  }
}

// propTypes
EditItem.propTypes = {
  initialValue: PropTypes.string.isRequired,
  getInputValue: PropTypes.func.isRequired
}

// styled components
const StyledInput = styled("input")`
  position: relative;
  text-align: left;
  margin-left: 53px;
  width: 60%;
  margin-bottom: 5px;
  border: 0;
  background: transparent;
  padding: 20px 0;
`;
