import React from "react";
import { mount, render, shallow } from "enzyme";
import Select from "./index";

describe("Select", () => {
  test("select props", () => {
    const wrapper = mount(
      <Select
        label="Select input"
        value="1"
        placeholder="placeholder"
        options={[
          { value: "example1", label: "example 1" },
          { value: "example 2", label: "example 2" }
        ]}
        onChange={() => console.log("test")}
      />
    );

    const select = wrapper.find("Select");

    expect(select.props().label).toEqual("Select input");
    expect(select.props().value).toEqual("1");
    expect(select.props().placeholder).toEqual("placeholder");
    expect(select.props().options).toEqual([
      { value: "example1", label: "example 1" },
      { value: "example 2", label: "example 2" }
    ]);
    expect(select.props().showArrow).toEqual(true);
  });
});
