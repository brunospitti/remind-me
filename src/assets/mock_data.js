import { listColors } from "../assets/globalStyles";

export const defaultLabels = [
  { label: "work", color: listColors.blue },
  { label: "gym", color: listColors.salmon },
  { label: "leisure", color: listColors.englishLavender },
  { label: "shopping", color: listColors.yellow }
];

export const mock_lists = [
  {
    list: "work",
    id: 1,
    color: listColors.blue,
    items: [
      {
        id: 1,
        task: "Ema Barhems",
        start_date: "2018-03-20T13:28:09",
        checked: false,
        priority: 'high'
      },
      {
        id: 2,
        task: "Culver Pitway",
        start_date: "2018-10-08T09:15:29",
        checked: false,
        priority: 'medium'
      },
      {
        id: 3,
        task: "Michael Botten",
        start_date: "2017-12-18T10:42:37",
        checked: false,
        priority: 'low'
      },
      {
        id: 4,
        task: "Erl Cottle",
        start_date: "2018-06-13T23:35:46",
        checked: false,
        priority: 'low'
      },
      {
        id: 5,
        task: "Alleen Butte",
        start_date: "2018-10-11T13:35:09",
        checked: false,
        priority: 'low'
      },
      {
        id: 6,
        task: "Skip MacBean",
        start_date: "2018-07-04T10:35:58",
        checked: false,
        priority: 'low'
      }
    ]
  },
  {
    list: "leisure",
    id: 2,
    color: listColors.salmon,
    items: [
      {
        id: 1,
        task: "Ema Barhems",
        start_date: "2018-03-20T13:28:09",
        checked: false,
        priority: 'low'
      },
      {
        id: 2,
        task: "Culver Pitway",
        start_date: "2018-10-08T09:15:29",
        checked: false,
        priority: 'low'
      },
      {
        id: 3,
        task: "Jarad Salliss",
        start_date: "2018-01-17T13:35:27",
        checked: false,
        priority: 'low'
      }
    ]
  }
];
