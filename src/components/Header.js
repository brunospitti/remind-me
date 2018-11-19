import React from "react";
import styled from "react-emotion";

import { colors } from "../globalStyles";

// styles with emotion
const Container = styled("header")`
  border-bottom: 1px solid ${colors.primary};
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px;
`;

const StyledH1 = styled("h1")`
  font-size: 24px;
  color: ${colors.primary};
`;

export class Header extends React.PureComponent {
  render() {
    return (
      <Container>
        <StyledH1>Remind me...</StyledH1>
      </Container>
    );
  }
}
