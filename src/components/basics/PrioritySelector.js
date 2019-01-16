import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";

import { priorityColors, colors } from "../../assets/globalStyles";

import { Button } from "./Button";

class PrioritySelector extends React.PureComponent {
  state = {
    showChangePriority: false
  };

  priorityColor = () => {
    let low = priorityColors.low;
    let medium = priorityColors.medium;
    let high = priorityColors.high;
    let { priority } = this.props;

    if (priority === 1) {
      return low;
    } else if (priority === 2) {
      return medium;
    } else {
      return high;
    }
  };

  handleChangePriority = (listId, taskId, newPriority) => {
    if (newPriority === "low") {
      newPriority = 1;
    } else if (newPriority === "medium") {
      newPriority = 2;
    } else {
      newPriority = 3;
    }
    this.props.handleChangeItemPriorityColor(listId, taskId, newPriority);
    this.setState({
      showChangePriority: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <span className="priority">
          <Button
            icon="priority"
            clickBehavior={() => this.setState({ showChangePriority: true })}
            text="Priority"
            mainColor={this.priorityColor()}
          />
        </span>
        {this.state.showChangePriority && (
          <StyledColorList>
            {Object.keys(priorityColors).map((priorityColor, i) => (
              <StyledLabelColor
                key={i}
                mainColor={priorityColors[priorityColor]}
                onClick={() =>
                  this.handleChangePriority(
                    this.props.listId,
                    this.props.taskId,
                    priorityColor
                  )
                }
              >
                {priorityColor}
              </StyledLabelColor>
            ))}
          </StyledColorList>
        )}
      </React.Fragment>
    );
  }
}

// styled components
const StyledColorList = styled("ul")`
  position: absolute;
  top: 5px;
  right: 80px;
  width: 240px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px ${colors.lightGrey};
  background: ${lighten(0.025, colors.light)};
  padding: 10px;
`;

const StyledLabelColor = styled("li")`
  cursor: pointer;
  background: ${props => props.mainColor};
  border-bottom: 2px solid ${props => darken(0.2, props.mainColor)};
  width: 70px;
  text-align: center;
  display: inline-block;
  padding: 10px 0;
  color: white;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export default PrioritySelector;
