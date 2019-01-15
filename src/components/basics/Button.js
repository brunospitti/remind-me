import React from "react";
import styled, { css } from "styled-components";

import { colors } from "../../assets/globalStyles";
import DeleteIcon from "../../assets/icons/delete.svg";
import PriorityIcon from "../../assets/icons/priority.svg";
import CollapseIcon from "../../assets/icons/collapse.svg";
import AddIcon from "../../assets/icons/add.svg";

export class Button extends React.PureComponent {

  getMainColor = () => {
    let mainColor = colors.lightGrey;
    if(this.props.primary){
      mainColor = colors.primary
    } else if (this.props.secondary) {
      mainColor = colors.secondary
    } else if (this.props.danger) {
      mainColor = colors.danger
    }

    return mainColor
  }

  render() {
    if (this.props.icon) {
      return (
        <StyledButtonIcon onClick={this.props.clickBehavior}>
          {this.props.icon ? (
            this.props.icon === "deleteIcon" ? (
              <DeleteIcon alt="delete item" id="deleteIcon" />
            ) : (
              ((this.props.icon === "priorityIcon" ? (
                <PriorityIcon
                  alt="priority item"
                  id="priorityIcon"
                  style={{fill: this.props.mainColor}}
                />
              ) : this.props.icon === "collapseIcon" ? (
                <CollapseIcon alt="collapse item" id="collapseIcon" />
              ) : this.props.icon === "addIcon" ? (
                <AddIcon alt="add item" id="addIcon" />
              ) : null): null)
            )
          ) : null}
        </StyledButtonIcon>
      );
    } else {
      return (
        <StyledButton onClick={this.props.clickBehavior} mainColor={this.getMainColor()}>
          {this.props.text}
        </StyledButton>
      );
    }
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