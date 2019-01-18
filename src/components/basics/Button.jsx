import React from "react";
import styled from "styled-components";

import { colors } from "../../assets/globalStyles";

import button from "../../hocs/button";

export class Button extends React.PureComponent {
  render() {
    const SimpleButton = button(StyledButton);
    const IconButton = button(StyledButtonIcon);
    const buttonProps = Object.assign({}, this.props);
    return (
      <React.Fragment>
        {this.props.icon ? (
          <IconButton {...buttonProps} />
        ) : (
          <SimpleButton {...buttonProps} />
        )}
      </React.Fragment>
    );
  }
}

// styled components
const StyledButton = styled("button")`
  cursor: pointer;
  background: ${props => props.mainColor};
  border: 0;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${colors.light};
  margin: 10px auto;
`;

const StyledButtonIcon = styled("button")`
  background: transparent;
  cursor: pointer;
  border: 0;
  padding: 10px;
  margin: 10px auto;
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-bottom: -6px;
    margin-left: 10px;
    &#deleteIcon {
      opacity: 0.4;
      transition: all 0.25s ease;
      &:hover {
        opacity: 1;
        fill: ${colors.danger};
      }
    }
    &#addIcon {
      opacity: 0.7;
      transition: all 0.25s ease;
      &:hover {
        opacity: 1;
        fill: ${colors.primary};
      }
    }
  }
`;
