import reducers from "../redux/reducers";

test("reducers", () => {
  let state;
  state = reducers({ num: 0 }, { type: "INCREMENT_NUM", num: 0 });
  expect(state).toEqual({ num: 1 });
});
