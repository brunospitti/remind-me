import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { addItem } from "../redux/actionCreators/addItem";

class AddItem extends React.PureComponent {
  state = {
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue != "") {
      this.props.handleAddItem(this.state.inputValue, this.props.listId);
      setTimeout(
        function() {
          this.props.completeListLayout();
        }.bind(this),
        0
      );
      this.setState({ inputValue: "" });
    }
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <StyledInput
          type="text"
          placeholder="Insert new item"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />
      </form>
    );
  }
}

// propTypes
AddItem.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  completeListLayout: PropTypes.func.isRequired
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

const mapDispatchToProps = dispatch => ({
  handleAddItem(newItem, listId) {
    dispatch(addItem(newItem, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
