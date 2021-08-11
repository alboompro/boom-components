import React, { useState as useStateMock } from "react";
import { mount, shallow } from "enzyme";

import Progress from "./Progress.js";
import Icon from "../../general/icon/Icon.js";

describe("Progress - Snapshot", () => {
  test("Renders the component correctly", () => {
    const wrapper = shallow(
      <Progress
        current={20}
        showLabel
        styleProgress={{ backgroundColor: "#87CEEB" }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  test("Values of props are correct", () => {
    const labels = [
      <span>20%</span>,
      <Icon
        kind="bold"
        group="interface-essential"
        category="alerts"
        file="alert-diamond.svg"
        size="16"
        color="#F9C318"
      />,
      <Icon
        kind="bold"
        group="interface-essential"
        category="form-validation"
        file="check-circle-1.svg"
        size="16"
        color="#54B14F"
      />
    ];

    const wrapper = mount(
      <Progress
        current={20}
        showLabel
        customLabel={labels}
        styleProgress={{ backgroundColor: "#87CEEB" }}
      />
    );

    expect(wrapper.prop("current")).toBe(20);
    expect(wrapper.prop("showLabel")).toBe(true);
    expect(wrapper.prop("styleProgress")).toEqual({
      backgroundColor: "#87CEEB"
    });
    expect(wrapper.prop("customLabel")).toEqual(labels);
  });
});
