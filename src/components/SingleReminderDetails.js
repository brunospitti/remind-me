/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";
import SingleReminder from "./SingleReminder";
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

const StyledH3 = styled("h3")`
  color: ${props => props.mainColor};
  margin-bottom: 10px;
  font-size: 1.3em;
`;

const StyledListItem = styled("li")`
  position: relative;
  padding: 20px;
  text-align: left;
`;

class SingleReminderDetails extends React.Component {
  dateTransformation = dateTime => {
    if (dateTime) {
      let date = dateTime.substring(0, 10);
      let year = date.substring(0, 4);
      let month = date.substring(5, 7);
      let day = date.substring(8, 10);
      let time = dateTime.substring(11, dateTime.length);
      let hour = time.substring(0, 2);
      let minute = time.substring(3, 5);
      let second = time.substring(6, 8);

      return `${day}/${month}/${year} - ${hour}h${minute}m${second}s`;
    } else {
      return null;
    }
  };

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
          <StyledH3 mainColor={this.props.mainColor}>Task details</StyledH3>
          <ul>
            <SingleReminder
              task={this.props.task}
              handleCheck={this.props.handleCheck}
              itemListDetails={this.props.itemListDetails}
              mainColor={this.props.mainColor}
              showReminderOptionsFunc={this.props.showReminderOptionsFunc}
            />

            <StyledListItem>
              <p>
                <b>Date created:</b>
              </p>
              <p>{this.dateTransformation(this.props.task.start_date)}</p>
            </StyledListItem>
            <StyledListItem>
              <p>
                <b>Scheduled to:</b>
              </p>
              <p>{this.dateTransformation(this.props.task.end_date)}</p>
            </StyledListItem>
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


