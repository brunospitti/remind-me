/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import LabelColorSelector from "./LabelColorSelector";

const StyledLabel = styled("span")`
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
    <ul>
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
    </ul>
  </React.Fragment>
);

export default LabelsManager;
