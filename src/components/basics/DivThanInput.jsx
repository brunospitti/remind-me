import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import contentEditable from "../../hocs/contentEditable";

export default class DivThanInput extends React.PureComponent {
  render() {
    let EditableDiv = contentEditable(StyledEditableDiv);
    const divProps = Object.assign({}, this.props);
    return (
      <EditableDiv
        className={this.props.className}
        type="text"
        placeholder={this.props.inputPlaceholder}
        value={this.props.value}
        {...divProps}
      />
    );
  }
}

// propTypes
DivThanInput.propTypes = {
  value: PropTypes.string.isRequired,
  getInputValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  dontSaveOnEnter: PropTypes.bool
}

// styled components
const StyledEditableDiv = styled("div")`
  cursor: text;
`;
