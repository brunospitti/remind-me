/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../assets/globalStyles";
import SingleReminder from "./SingleReminder";
import { Button } from "./basics/Button";

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
  button{
    position: absolute;
    bottom: 20px;
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

class SingleReminderDetails extends React.Component{
  dateTransformation = mainColor => {
    console.log(mainColor)
  }

  componentDidMount(){
    this.dateTransformation(this.props.mainColor)
  }

  render(){
    return(

      <React.Fragment>
        <StyledDetailsContainer>
          <StyledH3 mainColor={this.props.mainColor}>Task details</StyledH3>
          <ul>
            <SingleReminder
              task={this.props.task}
              handleCheck={this.props.handleCheck}
              itemListDetails={this.props.itemListDetails}
              mainColor={this.props.mainColor}
            />
    
            <StyledListItem>
              <b>Date created: </b>
              {this.props.task.start_date}
            </StyledListItem>
            <StyledListItem>
              <b>Scheduled to: </b>
              {this.props.task.end_date}
            </StyledListItem>
          </ul>
          <Button clickBehavior={this.props.closeDetails}
                  text="Close me"
          />
        </StyledDetailsContainer>
      </React.Fragment>
    )
  }
}

export default SingleReminderDetails;
