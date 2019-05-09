import React from "react";
import { shallow, mount, render } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  test("renders", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find("Input")).toBeDefined();
  });
});
