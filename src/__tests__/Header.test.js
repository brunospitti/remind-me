import React from "react";
import { create } from "react-test-renderer";
import Header from "../components/Header";

test("snapshot", () => {
  const c = create(<Header />);
  expect(c.toJSON()).toMatchSnapshot();
});
