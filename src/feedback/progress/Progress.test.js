import React from "react";
import { mount, shallow } from "enzyme";

import Progress from "./Progress.js";

describe("Progress - Snapshot", () => {
  test("Renders the component correctly", () => {
    const wrapper = shallow(
      <Progress
        current={20}
        showText={true}
        styleProgress={{ backgroundColor: "#87CEEB" }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  test("Values of props are correct", () => {
    const wrapper = mount(
      <Progress
        current={20}
        showText={true}
        styleProgress={{ backgroundColor: "#87CEEB" }}
      />
    );

    expect(wrapper.prop("current")).toBe(20);
    expect(wrapper.prop("showText")).toBe(true);
    expect(wrapper.prop("styleProgress")).toEqual({
      backgroundColor: "#87CEEB"
    });
  });
});
