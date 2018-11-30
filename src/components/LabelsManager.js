import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import LabelColorSelector from "./basics/LabelColorSelector";
import { SingleInput } from "./basics/SingleInput";

const StyledUl = styled("ul")`
  display: inline-block;
`
const StyledLabel = styled("li")`
  position: relative;
  padding: 10px 20px;
  margin: 0 5px;
  display: inline-block;
  &:first-child {
    margin-left: 0;
  }
`;

const LabelsManager = props => (
  <React.Fragment>
    <h3>Label manager</h3>
    <StyledUl>
      {Object.keys(props.labels).map((label, i) => (
        <StyledLabel
          key={i}
          style={{ backgroundColor: props.labels[label].color }}
        >
          <span>{props.labels[label].label}</span>
          <LabelColorSelector
            label={props.labels[label].label}
            handleColorChange={props.handleColorChange}
          />
        </StyledLabel>
      ))}
    </StyledUl>
    <SingleInput clickBehavior={props.addLabel} text="+"/>
  </React.Fragment>
);

export default LabelsManager;
