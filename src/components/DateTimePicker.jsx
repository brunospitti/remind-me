import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Datetime from "react-datetime";

import { colors } from "../assets/globalStyles";

import { currTime } from "../assets/helpers";

import { Button } from "./basics/Button";
import { rgba } from "polished";

class DateTimePicker extends React.PureComponent {
  state = {
    showRealCalendar: false
  };

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

  handleBlur = () => {
    this.setState({showRealCalendar: false})
  }

  renderInput = (props, openCalendar) => {
    return (
      <React.Fragment>
        <StyledInputHolder mainColor={this.props.mainColor}>
          <div>
            {!this.state.showRealCalendar ?
              <div onClick={() => this.setState({showRealCalendar: true})}>{this.props.defaultEndDate}</div>
            :
              <input {...props} autoFocus={true}/>
            }

            <Button
              icon="calendar"
              clickBehavior={openCalendar}
              text="Open Calendar"
            />
          </div>
          {this.props.defaultEndDate != "" && (
            <Button
              clickBehavior={() => this.props.getNewDate("")}
              text="Remove reminder"
            />
          )}
        </StyledInputHolder>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <StyledDateTimeContainer>
          <Datetime
            renderInput={this.renderInput}
            inputProps={{
              placeholder: "pick a date and time"
            }}
            defaultValue={this.defaultDate()}
            dateFormat="DD/MMM/YYYY"
            timeFormat="HH:mm"
            onChange={this.props.getNewDate}
            onBlur={this.handleBlur}
            isValidDate={this.isDateValid}
          />
        </StyledDateTimeContainer>
      </React.Fragment>
    );
  }
}

// styled components
const StyledInputHolder = styled("div")`
  div {
    border-bottom: 1px solid ${colors.lightGrey};
    display: block;
    margin-bottom: 5px;
    input {
      cursor: pointer;
      width: calc(100% - 25px);
      padding: 10px 0;
      border: 0;
    }
  }
  button {
    color: ${colors.tertiary};
    cursor: pointer;
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    svg {
      width: 25px;
      margin-bottom: -4px;
      &#calendarIcon {
        margin-left: 0;
      }
    }
  }
`;

const StyledDateTimeContainer = styled("div")`
  /*!
 * https://github.com/YouCanBookMe/react-datetime
 */

  .rdt {
    position: relative;
    &.rdtOpen {
      .rdtPicker {
        display: block;
      }
    }
    &.rdtStatic {
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
        font-size: 1.1em;
        font-weight: bold;
        height: 40px;
        &:before {
          content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 299.998 299.998'><path d='M149.997 0C67.157 0 .001 67.158.001 149.995s67.156 150.003 149.995 150.003 150-67.163 150-150.003S232.836 0 149.997 0zm10.358 168.337c-.008.394-.067.788-.122 1.183-.039.296-.057.599-.124.89-.067.303-.182.602-.28.905-.117.366-.226.731-.379 1.076-.029.06-.039.124-.065.184-.226.482-.488.934-.775 1.362-.018.026-.042.052-.06.078-.327.48-.7.916-1.092 1.325-.109.112-.22.213-.335.319-.345.329-.708.63-1.094.905-.119.086-.233.176-.358.259-.495.324-1.014.609-1.554.843-.117.052-.239.083-.358.13a10.425 10.425 0 0 1-1.909.542c-.612.112-1.232.189-1.86.189-.127 0-.257-.039-.384-.044-.602-.023-1.198-.07-1.771-.192-.179-.039-.355-.117-.534-.166a10.53 10.53 0 0 1-1.554-.529c-.057-.029-.117-.034-.174-.06l-57.515-27.129c-5.182-2.443-7.402-8.626-4.959-13.808 2.443-5.179 8.626-7.402 13.808-4.959l42.716 20.144V62.249c0-5.729 4.645-10.374 10.374-10.374s10.374 4.645 10.374 10.374V168.15h.002c0 .062-.018.124-.018.187z'/></svg>");
          display: inline-block;
          width: 17px;
          margin-right: 10px;
          vertical-align: middle;
        }
        &:hover {
          cursor: pointer;
          background: #eeeeee;
        }
      }
      table {
        width: 100%;
        margin: 0;
      }
      thead {
        tr:first-child {
          height: 45px;
          background: #f3f3f3;
          th {
            cursor: pointer;
            &:hover {
              background: #eeeeee;
            }
          }
        }
        button {
          width: 100%;
          height: 100%;
        }
      }
      td,
      th {
        text-align: center;
        height: 28px;
        vertical-align: middle;
      }
      td {
        cursor: pointer;
        &.rdtDay,
        &.rdtHour,
        &.rdtMinute,
        &.rdtSecond {
          &:hover {
            cursor: pointer;
            background: #eeeeee;
          }
        }
        &.rdtOld,
        &.rdtNew {
          color: #999999;
        }
        &.rdtToday {
          position: relative;
          background: ${rgba(colors.secondary, 0.1)};
          &:before {
            content: "";
            display: inline-block;
            border-left: 7px solid transparent;
            border-bottom: 7px solid ${colors.secondary};
            border-top-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            bottom: 4px;
            right: 4px;
          }
        }
        &.rdtActive,
        &.rdtActive:hover {
          background-color: ${colors.primary};
          color: #fff;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        }
        &.rdtActive {
          &.rdtToday:before {
            border-bottom-color: #fff;
          }
        }
        &.rdtDisabled,
        &.rdtDisabled:hover {
          background: none;
          color: #999999;
          cursor: not-allowed;
        }
        span {
          &.rdtOld {
            color: #999999;
          }
          &.rdtDisabled,
          &.rdtDisabled:hover {
            background: none;
            color: #999999;
            cursor: not-allowed;
          }
        }
      }

      th {
        border-bottom: 1px solid #f9f9f9;
        &.rdtSwitch {
          width: 100px;
          vertical-align: middle;
        }
        &.rdtNext,
        &.rdtPrev {
          font-size: 21px;
          vertical-align: middle;
          span {
            font-size: 21px;
            margin-top: -5px;
          }
        }
        &.rdtDisabled,
        &.rdtDisabled:hover {
          background: none;
          color: #999999;
          cursor: not-allowed;
        }
      }

      .dow {
        width: 14.2857%;
        border-bottom: none;
        cursor: default;
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

      tfoot {
        border-top: 1px solid #f9f9f9;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }

  td {
    &.rdtMonth,
    &.rdtYear {
      height: 50px;
      width: 25%;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }

  .rdtCounters {
    display: inline-block;
    > div {
      float: left;
    }
  }
  .rdtCounter {
    height: 100px;
    width: 40px;
    .rdtBtn {
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
      &:hover {
        background: #eee;
      }
    }
    .rdtCount {
      height: 20%;
      font-size: 1.2em;
    }
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
    input {
      width: 100%;
      font-size: 1.2em;
      margin-top: 37px;
    }
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
