import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Datetime from "react-datetime";

import { listColors } from "../assets/globalStyles";


import { currTime, dateTransformation } from "../assets/helpers";

import { Button } from "./basics/Button";

class DateTimePicker extends React.PureComponent {
  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  removeDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  };

  isDateValid = current => {
    return current.isAfter(this.removeDays(currTime(), 1));
  };

  defaultDate = () => {
    return this.props.defaultEndDate != ""
      ? new Date(this.props.defaultEndDate)
      : "";
  };

  renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <StyledInputHolder mainColor={this.props.mainColor}>
        <input {...props} />
        <Button
          icon="calendar"
          clickBehavior={openCalendar}
          text="Open Calendar"
        />
        <Button
          icon="clear"
          clickBehavior={() => this.props.getNewDate("")}
          text="Remove reminder"
        />
      </StyledInputHolder>
    );
  }

  render() {
    return (
      <React.Fragment>
        <StyledDateTimeContainer>
          <Datetime
            renderInput={ this.renderInput }
            inputProps={{
              placeholder: "pick a date and time"
            }}
            defaultValue={this.defaultDate()}
            dateFormat="DD/MMM/YYYY"
            timeFormat="HH:mm"
            onBlur={this.props.getNewDate}
            isValidDate={this.isDateValid}
          />
        </StyledDateTimeContainer>
      </React.Fragment>
    );
  }
}

// styled components
const StyledInputHolder = styled("div")`
  input{
    cursor: pointer;
  }
  button{
    cursor: pointer;
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    svg{
      width: 25px;
      margin-bottom: -4px;
      &#calendarIcon{
        margin-left: 0;
      }
      &#clearIcon{
        fill: ${props => props.mainColor};
      }
    }
  }
`



const StyledDateTimeContainer = styled("div")`
  /*!
 * https://github.com/YouCanBookMe/react-datetime
 */

  .rdt {
    position: relative;
    &.rdtOpen{
      .rdtPicker {
      display: block;
    }
    }
    &.rdtStatic{
      .rdtPicker {
        box-shadow: none;
        position: static;
      }
    }
    .rdtPicker {
      display: none;
      position: absolute;
      width: 250px;
      padding: 4px;
      margin-top: 1px;
      z-index: 99999 !important;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border: 1px solid #f9f9f9;
      .rdtTimeToggle {
    text-align: center;
  }
  table {
    width: 100%;
    margin: 0;
  }
  thead {
    tr:first-child{
      height: 45px;
      background: #f3f3f3;
    }
  }
  td,
  th {
    text-align: center;
    height: 28px;
  }
  td {
    cursor: pointer;
    &.rdtDay,
    &.rdtHour,
    &.rdtMinute,
    &.rdtSecond{
      &:hover{
          cursor: pointer;
        background: #eeeeee;
      }
    }
  }
  .rdtTimeToggle{
    &:hover{
      cursor: pointer;
        background: #eeeeee;
      }
  }
    }
  }


  
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday:before {
    content: "";
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #428bca;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
    vertical-align: middle;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: middle;
    span{
      font-size: 21px;
      margin-top: -5px;
    }
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: #eeeeee;
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }

  .rdtCounters {
    display: inline-block;
  }

  .rdtCounters > div {
    float: left;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 40px;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`;

const mapStateToProps = state => ({
  state
});
export default connect(
  mapStateToProps,
  null
)(DateTimePicker);
