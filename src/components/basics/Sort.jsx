import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { colors, mobileBreakpoint } from "../../assets/globalStyles";

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
          <option value="remind-me">Reminder date</option>
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
  @media (${mobileBreakpoint}) {
    float: none;
    margin: 0 auto 10px;
    text-align: center;
  }
  span {
    font-size: 1.1em;
  }
  select {
    border: 1px solid ${lighten(0.15, colors.lightGrey)};
    padding: 7px 2px;
    margin-left: 5px;
  }
`;
