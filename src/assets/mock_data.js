import { listColors } from "../assets/globalStyles";

export const defaultLabels = [
  { label: "work", color: listColors.blue },
  { label: "gym", color: listColors.salmon },
  { label: "leisure", color: listColors.englishLavender },
  { label: "shopping", color: listColors.yellow }
];

export const mock_lists = {
  1: {
    name: "work",
    id: 1,
    color: listColors.blue,
    items: [
      {
        id: 1,
        task: "Fill report",
        start_date: "2018-03-20T13:28:09",
        checked: false,
        priority: 3,
        notes: "",
        sub_tasks: {}
      },
      {
        id: 4,
        task: "Start dashboard project",
        start_date: "2018-06-13T23:35:46",
        checked: false,
        priority: 2,
        notes: "",
        sub_tasks: {}
      },
      {
        id: 3,
        task: "Talk to boss about raise",
        start_date: "2017-12-18T10:42:37",
        checked: false,
        priority: 1,
        notes: "",
        sub_tasks: {}
      },
      {
        id: 5,
        task: "Get package at reception",
        start_date: "2018-10-11T13:35:09",
        checked: false,
        priority: 1,
        notes: "",
        sub_tasks: {}
      }
    ]
  },
  2: {
    name: "leisure",
    id: 2,
    color: listColors.salmon,
    items: [
      {
        id: 1,
        task: "Take kids to park",
        start_date: "2018-03-20T13:28:09",
        checked: false,
        priority: 1,
        notes: "",
        sub_tasks: {}
      },
      {
        id: 2,
        task: "Go to that JS meet-up",
        start_date: "2018-10-08T09:15:29",
        checked: false,
        priority: 1,
        notes: "",
        sub_tasks: {}
      },
      {
        id: 3,
        task: "Watch new episode of Westworld",
        start_date: "2018-01-17T13:35:27",
        checked: false,
        priority: 1,
        notes: "",
        sub_tasks: {}
      }
    ]
  }
};
