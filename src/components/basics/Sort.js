/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import addItem from "../../redux/actionCreators/addItem";

import { colors } from "../../assets/globalStyles";
import { lighten } from "polished";

export default class Sort extends React.PureComponent {
  render() {
    return (
      <StyledSortBy>
        <span>Sort by: </span>
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
      </StyledSortBy>
    );
  }
}

// styled components
const StyledSortBy = styled("div")`
  float: right;
  margin-top: 10px;
  span{
    font-size: 1.1em;
  }
  select{
    border: 1px solid ${lighten(0.15, colors.lightGrey)};
    padding: 7px 2px;
    margin-left: 5px;
  }
`;
