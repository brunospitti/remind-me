import React from "react";
import styled from "styled-components";

import { colors, mobileBreakpoint } from "../assets/globalStyles";

export class Footer extends React.PureComponent {
  render() {
    return (
      <Container>
        <OuterLink href="http://www.brunospitti.com" target="_blank">
          React App made by Bruno Spitti
        </OuterLink>
      </Container>
    );
  }
}

// styles with emotion
const Container = styled("header")`
  background-color: ${colors.primary};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  padding: 20px;
  text-align: right;
  @media (${mobileBreakpoint}) {
    padding: 10px 20px;
  }
`;

const OuterLink = styled("a")`
  font-size: 13px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
