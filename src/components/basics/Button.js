import React from "react";
import styled, { css } from "styled-components";

import deleteIcon from "../../assets/icons/delete.svg";

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

    const StyledButtonIcon = styled("button")`
      background: transparent;
      cursor: pointer;
      border: 0;
      padding: 10px;
      margin: 10px auto;
      img {
        width: 20px;
        display: inline-block;
        margin-bottom: -6px;
        margin-left: 10px;
        &#deleteIcon {
          opacity: 0.4;
        }
      }
    `;

    if (this.props.icon) {
      return (
        <StyledButtonIcon onClick={this.props.clickBehavior}>
          {this.props.icon === "deleteIcon" ? (
            <img src={deleteIcon} alt="delete item" id="deleteIcon" />
          ) : null}
        </StyledButtonIcon>
      );
    } else {
      return (
        <StyledButton onClick={this.props.clickBehavior}>
          {this.props.text}
        </StyledButton>
      );
    }
  }
}
