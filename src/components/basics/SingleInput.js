import React from "react";
import styled from "styled-components";

import { colors, listColors } from "../../assets/globalStyles";
import { Button } from "./Button";
import ColorSelector from "./ColorSelector";

export class SingleInput extends React.PureComponent {
  state = {
    inputValue: "",
    inputColor: "lightGrey"
  };

  handleChange = e => {
    let inputNow = e.target.value;
    this.setState({ inputValue: inputNow });
  };

  clickBehavior = e => {
    e.preventDefault();
    this.props.clickBehavior(this.state.inputValue, this.state.inputColor);
    this.setState({ inputValue: "", inputColor: "lightGrey" });
  };

  handleColorAdd = (list, color) => {
    this.setState({ inputColor: color });
  };

  StyledForm = styled("form")`
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-left: 2%;
    .input-holder {
      border-radius: 3px 3px 0 0;
      padding: 15px 0;
      border: 1px solid ${props => props.mainColor};
      max-width: 130px;
      input{
        border: 0;
        width: calc(100% - 40px);
        display: inline-block;
        padding: 0 0 0 10px;
      }
    }
    img {
      background: white;
      margin: 0;
      padding: 15px 10px;
      margin-bottom: -20px;
      border-radius: 0 3px 0 0;
      width: 40px;
      border: 1px solid ${props => props.mainColor};
      border-left: 0;
    }
    button {
      background: ${props => props.mainColor};
      display: block;
      width: 100%;
      border-radius: 0 0 3px 3px;
      font-size: 2em;
      padding: 0px 10px 11px;
      line-height: 26px;
      margin: 0;
    }
  `;
  render() {
    return (
      <React.Fragment>
        <this.StyledForm mainColor={listColors[this.state.inputColor]}>
          <div className="input-holder">
            <input
              type="text"
              placeholder="Add new list"
              value={this.state.inputValue}
              onChange={e => this.handleChange(e)}
            />
            <ColorSelector handleColorChange={this.handleColorAdd} />
          </div>
          <Button
            clickBehavior={e => this.clickBehavior(e)}
            text={this.props.text}
          />
        </this.StyledForm>
      </React.Fragment>
    );
  }
}
