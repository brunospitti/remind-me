/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";
import PropTypes from 'prop-types';

import { colors, mobileBreakpoint } from "../assets/globalStyles";
import EditIcon from "../assets/icons/edit.svg";

import { dateTransformation } from "../assets/helpers";

import { deleteItem } from "../redux/actionCreators/deleteItem";
import PrioritySelector from "./basics/PrioritySelector";
import { changeItemPriorityColor } from "../redux/actionCreators/changeItemPriorityColor";

import { Button } from "./basics/Button";
import SingleToDoDetailsEdit from "./SingleToDoDetailsEdit";

class SingleToDoDetails extends React.PureComponent {
  deleteItem = (itemToDelete, listId) => {
    this.props.closeDetails();
    this.props.handleDeleteItem(itemToDelete, listId);
    setTimeout(
      function() {
        this.props.completeListLayout();
      }.bind(this),
      0
    );
  };

  render() {
    return (
      <StyledDetailsContainer
        className={this.props.task.checked ? "checked" : "not-checked"}
      >
        <div className="header-container">
          <StyledH3 mainColor={this.props.mainColor}>Task details</StyledH3>
          <StyledEditIcon style={{ fill: this.props.mainColor }} />
          <PrioritySelector
            handleChangeItemPriorityColor={
              this.props.handleChangeItemPriorityColor
            }
            priority={this.props.task.priority}
            listId={this.props.listId}
            taskId={this.props.task.id}
          />
        </div>
        <ul>
          <SingleToDoDetailsEdit
            task={this.props.task}
            showDetailsFunc={this.props.showDetailsFunc}
            mainColor={this.props.mainColor}
            listId={this.props.listId}
          />
        </ul>
        <StyledFooter mainColor={this.props.mainColor}>
          <Button
            className="footer-item"
            icon="collapse"
            clickBehavior={this.props.closeDetails}
            text="Close me"
          />
          <div className="footer-item">
            <b>Date created:</b>{" "}
            {dateTransformation(this.props.task.start_date)}
          </div>
          <Button
            className="footer-item"
            icon="delete"
            clickBehavior={() =>
              this.deleteItem(this.props.task.id, this.props.listId)
            }
            text="Delete"
          />
        </StyledFooter>
      </StyledDetailsContainer>
    );
  }
}

// propTypes
SingleToDoDetails.propTypes = {
  closeDetails: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  completeListLayout: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  listId: PropTypes.string.isRequired,
  showDetailsFunc: PropTypes.func.isRequired,
  mainColor: PropTypes.string
}

// styled components
const StyledDetailsContainer = styled("div")`
  height: 100%;
  width: 45%;
  position: absolute;
  padding: 20px;
  right: 5px;
  bottom: 0;
  background: white;
  box-shadow: -1px 2px 4px ${colors.lightGrey};
  @media (${mobileBreakpoint}) {
    width: 100%;
    right: 0;
    padding: 10px;
    top: -100px;
    height: 500px;
  }
  &.active {
    width: 40%;
  }
  > button {
    position: absolute;
    bottom: 20px;
  }
  li#single-ToDo {
    div {
      padding-left: 0;
    }
    div + div {
      padding-left: 15px;
    }
  }
  &.checked {
    .header-container,
    ul,
    > div {
      opacity: 0.5;
    }
  }
`;

const StyledEditIcon = styled(EditIcon)`
  float: right;
  width: 33px;
`;

const StyledH3 = styled("h3")`
  color: ${props => props.mainColor};
  margin-bottom: 10px;
  margin-top: 7px;
  font-size: 1.3em;
  display: inline-block;
`;

const StyledFooter = styled("div")`
  position: absolute;
  bottom: 0;
  background: ${lighten(0.225, colors.lightGrey)};
  width: 100%;
  left: 0;
  button {
    background: ${lighten(0.2, colors.lightGrey)};
    margin: 0;
    padding: 20px;
    transition: 0.25s all ease;
    &:hover {
      background: ${lighten(0.15, colors.lightGrey)};
    }
    svg {
      margin-left: 0;
      &#collapseIcon {
        transform: rotate(180deg);
      }
    }
  }
  div {
    width: calc(100% - 120px);
    text-align: center;
  }
  button:last-child {
    svg {
      &:hover {
        opacity: 0.4 !important;
        fill: black !important;
      }
    }
  }
  .footer-item {
    display: inline-block;
    b {
      @media (${mobileBreakpoint}) {
        display: block;
        margin-bottom: 5px;
      }
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  handleDeleteItem(itemToDelete, listId) {
    dispatch(deleteItem(itemToDelete, listId));
  },
  handleChangeItemPriorityColor(listId, taskId, newPriority) {
    dispatch(changeItemPriorityColor(listId, taskId, newPriority));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SingleToDoDetails);
