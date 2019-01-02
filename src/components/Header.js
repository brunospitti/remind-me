import React from "react";
import styled from "styled-components";

import { colors } from "../assets/globalStyles";

export class Header extends React.PureComponent {
  render() {
    return (
      <StyledContainer>
        <StyledH1>To do list</StyledH1>
      </StyledContainer>
    );
  }
}

// styled components
const StyledContainer = styled("header")`
  background: ${colors.light};
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