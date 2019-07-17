import React from "react";
import { mount } from "enzyme";
import { Formik, Form } from "formik";
import Input, { DefaultInput } from "./Input";

describe("Input", () => {
  test("input props", () => {
    const wrapper = mount(
      <DefaultInput
        name="field1"
        label="input Test"
        type="text"
        value="Text"
        clearable
        readOnly
        error
      />
    );

    const input = wrapper.find("input");
    const label = wrapper.find("label");

    expect(input.props().name).toEqual("field1");
    expect(input.props().type).toEqual("text");
    expect(input.props().value).toEqual("Text");
    expect(input.props().readOnly).toEqual(true);
    expect(label.props().children).toEqual("input Test");
  });

  test("formik input props", () => {
    const wrapper = mount(
      <Formik initialValues={{ field1: "Text" }}>
        <Form>
          <Input
            name="field1"
            label="input Test"
            type="text"
            value="Text"
            readOnly
          />
        </Form>
      </Formik>
    );

    const input = wrapper.find("input");
    const label = wrapper.find("label");

    expect(input.props().name).toEqual("field1");
    expect(input.props().type).toEqual("text");
    expect(input.props().value).toEqual("Text");
    expect(input.props().readOnly).toEqual(true);
    expect(label.props().children).toEqual("input Test");
  });
});
