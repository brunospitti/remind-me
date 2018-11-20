import React from "react";
import { css } from "emotion";
import styled from 'react-emotion'

import { colors } from "../../globalStyles";



export class Button extends React.PureComponent {
  render() {

    const StyledButtonSecondary = () => this.props.secondary && css`
      background: ${colors.secondary};
    `;
    
    const StyledButtonDanger = () => this.props.danger && css`
      background: ${colors.danger};
    `;
    
    const StyledButton = styled('button')`
      cursor: pointer;
      background: ${colors.primary};
      border: 0;
      padding: 10px 30px;
      border-radius: 3px;
      color: ${colors.light};
      margin: 10px auto;
      ${StyledButtonSecondary};
      ${StyledButtonDanger};
    `;

    return (
      <StyledButton
        onClick={this.props.clickBehavior}
      >
        {this.props.text}
      </StyledButton>
    );
  }
}
