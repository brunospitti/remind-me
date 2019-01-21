import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { colors } from "../assets/globalStyles";

import { userLogout } from "../redux/actionCreators/userLogout";

import { Button } from "./basics/Button";

class Header extends React.PureComponent {
  render() {
    return (
      <StyledContainer>
        <StyledH1>To do list</StyledH1>
        <StyledButton
          clickBehavior={() => this.props.userLogout()}
          text={"Sign out"}
        />
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
  display: inline-block;
  color: ${colors.primary};
`;

const StyledButton = styled(Button)`
  float: right;
  margin: -5px 0 0;
  padding: 0 15px 5px;
  font-size: 1.3em;
  font-weight: 600;
  color: ${colors.complementary};
  background-color: transparent;
  border-bottom: 1px solid;
  border-radius: 0;
`;

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  { userLogout }
)(Header);
