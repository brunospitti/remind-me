import React from "react";
import styled from "styled-components";

import { colors, labelColors } from "../../globalStyles";
import { Button } from "./Button";
import LabelColorSelector from "./LabelColorSelector";

export class SingleInput extends React.PureComponent {
    state ={
        inputValue: "",
        inputColor: "lightGrey"
    }
    
    
    handleChange = e => {
        let inputNow = e.target.value;
        this.setState({inputValue: inputNow});
    }
    
    clickBehavior = e => {
        e.preventDefault()
        this.props.clickBehavior(this.state.inputValue, this.state.inputColor)
        this.setState({inputValue: "", inputColor: "lightGrey"})
    }
    
    handleColorAdd = (label, color) => {
        this.setState({inputColor: color})
    }
    
    StyledForm = styled("form")`
        display: inline-block;
        position: relative;
        input{
            border-radius: 3px 0 0 3px;
            border: 1px solid ${props => props.mainColor};
            border-right: 0;
            padding: 8px 0;
            text-align: center;
            max-width: 100px;
        }
        img{
            background: white;
            margin: 0;
            margin-bottom: -13px;
            padding: 8px 10px;
            width: 40px;
            border: 1px solid ${props => props.mainColor};
            border-left: 0;
        }
        button{
            background: ${props => props.mainColor};
            border-radius: 0 3px 3px 0;
            font-size: 2em;
            padding: 0px 10px 11px;
            line-height: 26px;
            margin: 0;
        }
    `
    render() {
      return (
        <React.Fragment>
            <this.StyledForm mainColor={labelColors[this.state.inputColor]}>
                <input type="text" placeholder="Add new label" value={this.state.inputValue} onChange={e => this.handleChange(e)}/>
                <LabelColorSelector handleColorChange={this.handleColorAdd}/>
                <Button clickBehavior={e => this.clickBehavior(e)} text={this.props.text}/>
            </this.StyledForm>
        </React.Fragment>
      );
    }
  }