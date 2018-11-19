import React from "react";
import styled from "react-emotion";

import { colors } from "../globalStyles";

import Reminders from "../components/Reminders";

export default class HomePage extends React.Component {
  render() {
    const CenteredContainer = styled("div")`
      width: 60%;
      position: relative;
      padding: 20px 0;
      margin: 30px auto;
      text-align: center;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 120%;
        left: -10%;
        bottom: 0;
        height: 1px;
        background-color: ${colors.lightGrey};
      }
    `;

    return (
      <div className="home">
        <CenteredContainer>
          <Reminders />
        </CenteredContainer>
      </div>
    );
  }
}
