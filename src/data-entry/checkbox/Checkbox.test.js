import React from "react";
import { mount } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("checkbox props", () => {
    const wrapper = mount(
      <Checkbox
        onChange={() => console.log("test")}
        label="Label de exemplo"
        checked={false}
      />
    );

    expect(wrapper.props().label).toEqual("Label de exemplo");
    expect(wrapper.props().className).toEqual("");
    expect(wrapper.props().defaultChecked).toEqual(false);
    expect(wrapper.props().checkboxStyle).toEqual(null);
    expect(wrapper.props().checked).toEqual(false);
  });
});
