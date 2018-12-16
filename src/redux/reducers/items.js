// a reducer takes in two things:
// 1. copy of current state
// 2. the action (info about what happened)

import { randomId } from "../../assets/helpers";

function items(state = "", action) {
  switch (action.type) {
    case "ADD_ITEM":
      let currState = [...this.props.lists];
      let currList = this.getCurrentList();
      let currTime = new Date(new Date().toString().split("GMT")[0] + " UTC")
        .toISOString()
        .split(".")[0];

      currState.filter(list => list.id === currList.id)[0].items.push({
        id: randomId(),
        task: itemToAdd,
        start_date: currTime,
        end_date: "",
        checked: false,
        labels: []
      });

      this.setState({ mock_lists: currState }, () => {
        this.completeListLayout();
      });

    default:
      return state;
  }
}

export default items;
