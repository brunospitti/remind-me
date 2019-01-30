import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from 'prop-types';

import { colors, mobileBreakpoint } from "../assets/globalStyles";

import notificationSound from "../assets/audio/notification.mp3";

import { currTime, dateTimeTransformation } from "../assets/helpers";

import { checkItem } from "../redux/actionCreators/checkItem";
import { ignoreReminderItem } from "../redux/actionCreators/ignoreReminderItem";
import { editItemEndDate } from "../redux/actionCreators/editItemEndDate";

import { Button } from "./basics/Button";

class Notification extends React.PureComponent {
  state = {
    showNotification: false,
    item: {},
    pageTitle: "Remind me..."
  };

  cleanState = () => {
    this.setState(
      {
        showNotification: false,
        item: {},
        pageTitle: "Remind me..."
      },
      () => {
        document.title = this.state.pageTitle;
      }
    );
  };

  componentDidMount() {
    this.notificationFirstTime();
    this.notificationTimer();
  }

  notificationFirstTime = () => {
    setTimeout(() => {
      this.notificationRun();
    }, 1000);
  };

  notificationTimer = () => {
    setInterval(() => {
      this.notificationRun();
    }, 60 * 1000);
  };

  notificationRun = () => {
    let notificationData = this.allItems();
    let dateNow = new Date(currTime()).getTime();
    const audio = new Audio(notificationSound);
    notificationData.map(item => {
      let itemEndDate = new Date(item.end_date).getTime();
      if (item.reminder_set) {
        if (dateNow >= itemEndDate) {
          if (!this.state.showNotification) {
            audio.play();
          }
          this.setState(
            {
              showNotification: true,
              item,
              pageTitle: `Reminder: ${item.task}`
            },
            () => {
              document.title = this.state.pageTitle;
            }
          );
        }
      }
    });
  };

  allItems = () => {
    let lists = { ...this.props.lists };
    let items = [];
    let allItemsUgly = [];
    if (
      this.props.lists != "loading" &&
      Object.keys(this.props.lists).length > 0
    ) {
      allItemsUgly = Object.keys(lists).map(listKey => lists[listKey].items);
      allItemsUgly.map(item => {
        if (typeof item === "object" && !Array.isArray(item)) {
          Object.keys(item).map(itemTiny => items.push(item[itemTiny]));
        } else {
          item.map(itemTiny => items.push(itemTiny));
        }
      });

      items = items.filter(item => !item.ignoreMe);

      return items;
    }
  };

  handleComplete = () => {
    this.cleanState();

    this.props.handleCheckItem(this.state.item.id, this.state.item.list_id);
    this.props.handleEditItemEndDate(
      this.state.item.list_id,
      this.state.item.id,
      ""
    );
  };
  handleIgnore = () => {
    this.cleanState();
    this.props.handleIgnoreReminderItem(
      this.state.item.id,
      this.state.item.list_id
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showNotification ? (
          <StyledNotification
            mainColor={this.props.lists[this.state.item.list_id].color}
          >
            <h1>{this.state.item.task}</h1>
            <span>{dateTimeTransformation(this.state.item.end_date)}</span>
            <Button
              primary
              clickBehavior={() => this.handleComplete()}
              text={"Complete"}
            />
            <Button
              clickBehavior={() => this.handleIgnore()}
              text={"Ignore for now"}
            />
          </StyledNotification>
        ) : null}
      </React.Fragment>
    );
  }
}

// propTypes
Notification.propTypes = {
  lists: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string,
  ]),
  handleCheckItem: PropTypes.func.isRequired,
  handleEditItemEndDate: PropTypes.func.isRequired,
  handleIgnoreReminderItem: PropTypes.func.isRequired
}

// styled components
const StyledNotification = styled("header")`
  background: ${colors.light};
  border-bottom: 3px solid ${props => props.mainColor};
  position: fixed;
  right: 0;
  top: 10%;
  width: 350px;
  z-index: 10;
  padding: 20px;
  @media (${mobileBreakpoint}) {
    width: 100%;
    top: auto;
    bottom: 34px;
    padding: 10px;
  }
  h1 {
    font-size: 17px;
    color: ${props => props.mainColor};
    margin-bottom: 5px;
  }
  span {
    display: block;
    margin-bottom: 10px;
    color: ${colors.lightGrey};
  }
  button {
    display: inline-block;
  }
  button + button {
    margin-left: 25px;
  }
`;

function mapStateToProps({ lists }) {
  return { lists };
}

const mapDispatchToProps = dispatch => ({
  handleCheckItem(itemToCheck, listId) {
    dispatch(checkItem(itemToCheck, listId));
  },
  handleIgnoreReminderItem(itemToCheck, listId) {
    dispatch(ignoreReminderItem(itemToCheck, listId));
  },
  handleEditItemEndDate(listId, taskId, newDate) {
    dispatch(editItemEndDate(listId, taskId, newDate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
