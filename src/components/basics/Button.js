import React from "react";
import styled, { css } from "styled-components";

import { colors } from "../../assets/globalStyles";

export class Button extends React.PureComponent {
  render() {
    const StyledButtonPrimary = () =>
      this.props.primary &&
      css`
        background: ${colors.primary};
      `;

    const StyledButtonSecondary = () =>
      this.props.secondary &&
      css`
        background: ${colors.secondary};
      `;

    const StyledButtonDanger = () =>
      this.props.danger &&
      css`
        background: ${colors.danger};
      `;

    const StyledButton = styled("button")`
      cursor: pointer;
      background: ${colors.lightGrey};
      border: 0;
      padding: 10px 30px;
      border-radius: 3px;
      color: ${colors.light};
      margin: 10px auto;
      ${StyledButtonPrimary};
      ${StyledButtonSecondary};
      ${StyledButtonDanger};
    `;

    return (
      <StyledButton onClick={this.props.clickBehavior}>
        {this.props.text}
      </StyledButton>
    );
  }
}
