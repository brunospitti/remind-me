import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { listColors } from "../assets/globalStyles";

import { Button } from "./basics/Button";

class AddList extends React.PureComponent {
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
    if (this.state.inputValue != "") {
      this.props.clickBehavior(
        this.state.inputValue,
        this.state.inputColor,
        this.props.user.uid
      );
      this.setState({ inputValue: "", inputColor: "lightGrey" });
    } else {
      this._input.focus();
    }
  };

  handleColorAdd = (list, color) => {
    this.setState({ inputColor: color });
  };

  render() {
    return (
      <React.Fragment>
        <StyledForm
          mainColor={listColors[this.state.inputColor]}
          buttonHeight={this.state.inputValue === "" ? "7px" : "40px"}
        >
          <div className="input-holder">
            <input
              ref={c => (this._input = c)}
              autoFocus={this.props.autoFocus ? true : false}
              type="text"
              placeholder="Create new list"
              value={this.state.inputValue}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <Button
            style={{ backgroundColor: "blue" }}
            clickBehavior={e => this.clickBehavior(e)}
            text={this.props.text}
          />
        </StyledForm>
      </React.Fragment>
    );
  }
}

// propTypes
AddList.propTypes = {
  clickBehavior: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string,
  ]),
  autoFocus: PropTypes.bool,
  text: PropTypes.string
}

// styled components
const StyledForm = styled("form")`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-left: 2%;
  .input-holder {
    border-radius: 3px 3px 0 0;
    padding: 12px 0 10px;
    max-width: 160px;
    input {
      border: 0;
      font-size: 1.2em;
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
    border-radius: 0;
    font-size: 2em;
    padding: 0 0 7px;
    line-height: 1em;
    margin: 0;
    height: ${props => props.buttonHeight};
  }
`;

const mapStateToProps = ({ user }) => ({
  user
});
export default connect(
  mapStateToProps,
  null
)(AddList);
