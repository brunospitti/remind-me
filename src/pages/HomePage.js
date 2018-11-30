import React from "react";
import styled from "styled-components";

import { labelColors } from "../globalStyles";

import Reminders from "../components/Reminders";
import LabelsManager from "../components/LabelsManager";
import { defaultLabels } from "../assets/mock_data";

export default class HomePage extends React.Component {
  state = {
    defaultLabels
  };

  handleColorChange = (label, color) => {
    let defaultLabels = [...this.state.defaultLabels];
    defaultLabels[defaultLabels.findIndex(key => key.label == label)].color = labelColors[color];
    this.setState({ defaultLabels });
  };

  addLabel = (newLabel, newColor) => {
    let defaultLabels = [...this.state.defaultLabels];
    defaultLabels.push({"label": newLabel, "color": labelColors[newColor]})    
    this.setState({defaultLabels})

  }

  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Reminders />
          <LabelsManager
            labels={this.state.defaultLabels}
            handleColorChange={this.handleColorChange}
            addLabel={this.addLabel}
          />
        </React.Fragment>
      </div>
    );
  }
}
