import React from "react";
import styled from "styled-components";

import { colors } from "../globalStyles";

import Reminders from "../components/Reminders";
import { Button } from "../components/basics/Button";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Reminders />
        </React.Fragment>
      </div>
    );
  }
}
