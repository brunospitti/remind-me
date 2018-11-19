import React from "react";
import styled from "react-emotion";

import { colors } from "../globalStyles";

// styles with emotion
const Container = styled("header")`
  background-color: ${colors.primary};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  padding: 20px;
  text-align: right;
`;

const OuterLink = styled("a")`
  font-size: 13px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

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
