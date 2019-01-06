/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import addItem from "../../redux/actionCreators/addItem";

import { colors } from "../../assets/globalStyles";
import { lighten } from "polished";

export default class Sort extends React.Component {
  render() {
    return (
      <select
        value={this.props.sortBy}
        onChange={e => this.props.handleSortByChange(e.target.value)}
      >
        <option value="most-important">Most Important</option>
        <option value="alphabetically-a-z">Alphabetically (A-Z)</option>
        <option value="alphabetically-z-a">Alphabetically (Z-A)</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
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
