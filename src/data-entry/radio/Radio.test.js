import React from "react";
import { mount } from "enzyme";
import Radio from "./Radio";

describe("Radio", () => {
  test("Radio props", () => {
    const wrapper = mount(
      <Radio
        className="radio-style"
        defaultChecked
        id="123"
        label="Label de exemplo"
        name="group-radio"
        onChange={() => console.log("radio")}
        value="Valor de exemplo"
      />
    );

    expect(wrapper.props().className).toEqual("radio-style");
    expect(wrapper.props().defaultChecked).toEqual(true);
    expect(wrapper.props().id).toEqual("123");
    expect(wrapper.props().label).toEqual("Label de exemplo");
    expect(wrapper.props().name).toEqual("group-radio");
    expect(wrapper.props().value).toEqual("Valor de exemplo");
  });
});
