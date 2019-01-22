import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { colors } from "../assets/globalStyles";

import { currTime } from "../assets/helpers";

import { userLogout } from "../redux/actionCreators/userLogout";

import { Button } from "./basics/Button";

class Notification extends React.PureComponent {
  componentDidMount() {
    this.notificationCheck();
  }

  notificationCheck = () => {
    setInterval(() => {
      let notificationData = this.allItems();
      let dateNow = new Date(currTime()).getTime();
      let test = new Date(notificationData[1].itemEndDate).getTime();
      if (dateNow <= test) {
        console.log("now is lower");
      } else {
        console.log("now is higher or equal");
      }
      // console.log("​ToDosPage -> notificationCheck -> dateNow", dateNow, test);
    }, 1000);
  };

  allItems = () => {
    let lists = { ...this.props.lists };
    let items = [];
    let allItemsUgly = [];
    let cleanItems = [];
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
      cleanItems = items.map(item => ({
        itemId: item.id,
        itemEndDate: item.end_date,
        itemListId: item.list_id
      }));

      return cleanItems;
    }
  };

  render() {
    return (
      <StyledNotification>
        This is the Notification
        <span />
      </StyledNotification>
    );
  }
}

// styled components
const StyledNotification = styled("header")`
  background: ${colors.light};
  border-bottom: 1px solid ${colors.primary};
  position: fixed;
  right: 0;
  top: 10%;
  width: 25%;
  z-index: 10;
  padding: 20px;
`;

const StyledH1 = styled("h1")`
  font-size: 24px;
  display: inline-block;
  color: ${colors.primary};
`;

const StyledButton = styled(Button)`
  float: right;
  margin: -5px 0 0;
  padding: 0 15px 5px;
  font-size: 1.3em;
  font-weight: 600;
  color: ${colors.complementary};
  background-color: transparent;
  border-bottom: 1px solid;
  border-radius: 0;
`;

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  { userLogout }
)(Notification);
