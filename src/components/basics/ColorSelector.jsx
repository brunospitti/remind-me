/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import PropTypes from 'prop-types';

import { listColors, colors } from "../../assets/globalStyles";
import ChangeColorIcon from "../../assets/icons/paint-board-and-brush.svg";

class ColorSelector extends React.PureComponent {
  state = {
    showColorSelector: false
  };

  handleColorChange = (listId, listColor) => {
    this.props.handleColorChange(listId, listColor);
    this.setState({
      showColorSelector: !this.state.showColorSelector
    });
  };

  render() {
    return (
      <React.Fragment>
        <StyledImg
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
            {Object.keys(listColors).map((listColor, i) => (
              <StyledLabelColor
                key={i}
                style={{ backgroundColor: listColors[listColor] }}
                onClick={() =>
                  this.handleColorChange(this.props.list.id, listColor)
                }
              />
            ))}
          </StyledColorList>
        )}
      </React.Fragment>
    );
  }
}

// propTypes
ColorSelector.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  list: PropTypes.object
}

// styled components
const StyledImg = styled(ChangeColorIcon)`
  cursor: pointer;
  width: 20px;
  display: inline-block;
  margin-bottom: -6px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledColorList = styled("ul")`
  position: absolute;
  bottom: 20px;
  z-index: 9999;
  left: 0;
  border-radius: 3px;
  box-shadow: 1px 1px 4px ${colors.lightGrey};
  background: ${lighten(0.025, colors.light)};
  padding: 10px;
  width: 100%;
`;

const StyledLabelColor = styled("li")`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: inline-block;
  &:not(:first-child) {
    margin-left: 2%;
  }
`;

export default ColorSelector;
