import React from "react";
import styled, { css } from "styled-components";

import DeleteIcon from "../../assets/icons/delete.svg";
import PriorityIcon from "../../assets/icons/priority.svg";
import CollapseIcon from "../../assets/icons/collapse.svg";
import AddIcon from "../../assets/icons/add.svg";


import { colors } from "../../assets/globalStyles";

export class Button extends React.PureComponent {
  render() {
    // styled components
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

    const StyledPriorityIcon = styled(PriorityIcon)`
      fill: ${props => props.mainColor};
    `;

    if (this.props.icon) {
      return (
        <StyledButtonIcon onClick={this.props.clickBehavior}>
          {this.props.icon ? (
            this.props.icon === "deleteIcon" ? (
              <DeleteIcon alt="delete item" id="deleteIcon" />
            ) : (
              ((this.props.icon === "priorityIcon" ? (
                <StyledPriorityIcon
                  alt="priority item"
                  id="priorityIcon"
                  mainColor={this.props.mainColor}
                />
              ) : this.props.icon === "collapseIcon" ? (
                <CollapseIcon alt="collapse item" id="collapseIcon" />
              ) : this.props.icon === "addIcon" ? (
                <AddIcon alt="add item" id="addIcon" />
              ) : null) : null)
            )
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
