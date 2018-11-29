/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { labelColors, colors } from "../../globalStyles";

import changeColorIcon from "../../assets/icons/paint-board-and-brush.svg";

class LabelColorSelector extends React.PureComponent {
  state = {
    showColorSelector: false
  };

  render() {
    const StyledImg = styled("img")`
      cursor: pointer;
      width: 20px;
      display: inline-block;
      margin-bottom: -6px;
      margin-left: 10px;
    `;

    const StyledColorList = styled("ul")`
      position: absolute;
      top: -57px;
      left: 0;
      border-radius: 3px;
      box-shadow: 1px 1px 4px ${colors.lightGrey};
      background: ${lighten(0.025, colors.light)};
      padding: 10px;
      width: 295px;
    `;

    const StyledLabelColor = styled("li")`
      cursor: pointer;
      height: 30px;
      width: 30px;
      display: inline-block;
      &:not(:first-child) {
        margin-left: 5px;
      }
    `;
    return (
      <React.Fragment>
        <StyledImg
          src={changeColorIcon}
          alt="change color"
          role="button"
          onKeyPress={() =>
            this.setState({
              showColorSelector: !this.state.showColorSelector
            })
          }
          onClick={() =>
            this.setState({
              showColorSelector: !this.state.showColorSelector
            })
          }
          tabIndex="0"
        />
        {this.state.showColorSelector && (
          <StyledColorList>
            {Object.keys(labelColors).map((labelColor, i) => (
              <StyledLabelColor
                key={i}
                style={{ backgroundColor: labelColors[labelColor] }}
                onClick={() =>
                  this.props.handleColorChange(this.props.label, labelColor)
                }
              />
            ))}
          </StyledColorList>
        )}
      </React.Fragment>
    );
  }
}

export default LabelColorSelector;
