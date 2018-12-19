/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import {dateTransformation} from "../assets/helpers"

import EditIcon from "../assets/icons/edit.svg";


import { colors } from "../assets/globalStyles";
import SingleReminder from "./SingleReminder";
import SingleReminderDetailsEdit from "./SingleReminderDetailsEdit"
import { Button } from "./basics/Button";

import deleteItem from "../redux/actionCreators/deleteItem";

const StyledDetailsContainer = styled("div")`
  height: calc(100% - 48px);
  width: 50%;
  position: absolute;
  padding: 20px;
  right: 5px;
  bottom: 0;
  background: white;
  box-shadow: -1px 2px 4px ${colors.lightGrey};
  &.active {
    width: 50%;
  }
  > button {
    position: absolute;
    bottom: 20px;
  }
  li#single-reminder {
    div {
      padding-left: 0;
    }
    div + div {
      padding-left: 15px;
    }
  }
`;

const StyledEditIcon = styled(EditIcon)`
  display: inline-block;
  float: right;
  width: 33px;
  fill: ${props => props.mainColor};
`

const StyledH3 = styled("h3")`
  color: ${props => props.mainColor};
  margin-bottom: 10px;
  margin-top: 7px;
  font-size: 1.3em;
  display: inline-block;
`;

const StyledListItem = styled("li")`
  position: relative;
  padding: 20px;
  text-align: left;
`;

class SingleReminderDetails extends React.Component {
  deleteItem = (itemToDelete, listId) => {
    this.props.closeDetails();
    this.props.handleDeleteItem(itemToDelete, listId);
    setTimeout(function(){
      this.props.completeListLayout()
    }.bind(this), 0);
  };

  render() {
    return (
      <React.Fragment>
        <StyledDetailsContainer>
          <div className="header-container">
            <StyledH3 mainColor={this.props.mainColor}>Task details</StyledH3>
            <StyledEditIcon mainColor={this.props.mainColor} />
          </div>
          <ul>
            <SingleReminderDetailsEdit
              task={this.props.task}
              itemListDetails={this.props.itemListDetails}
              mainColor={this.props.mainColor}
              showReminderOptionsFunc={this.props.showReminderOptionsFunc}
              listId={this.props.listId}
            />
            <StyledListItem>
              <Button
                clickBehavior={() => this.deleteItem(this.props.task.id, this.props.listId)}
                text="Delete"
              />
            </StyledListItem>
          </ul>
          <Button clickBehavior={this.props.closeDetails} text="Close me" />
        </StyledDetailsContainer>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleDeleteItem(itemToDelete, listId) {
    dispatch(deleteItem(itemToDelete, listId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SingleReminderDetails);


