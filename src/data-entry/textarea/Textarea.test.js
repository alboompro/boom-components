import React from "react";
import { mount } from "enzyme";
import { Formik, Form } from "formik";
import Textarea, { DefaultTextArea } from "./Textarea";

describe("Textarea", () => {
  test("textarea props", () => {
    const wrapper = mount(
      <DefaultTextArea
        name="field1"
        label="textarea Test"
        type="text"
        value="Text"
        clearable
        readOnly
        error
      />
    );

    const textarea = wrapper.find("textarea");
    const label = wrapper.find("label");

    expect(textarea.props().name).toEqual("field1");
    expect(textarea.props().type).toEqual("text");
    expect(textarea.props().value).toEqual("Text");
    expect(textarea.props().readOnly).toEqual(true);
    expect(label.props().children).toEqual("textarea Test");
  });

  test("formik textarea props", () => {
    const wrapper = mount(
      <Formik initialValues={{ field1: "Text" }}>
        <Form>
          <Textarea
            name="field1"
            label="textarea Test"
            type="text"
            value="Text"
            readOnly
          />
        </Form>
      </Formik>
    );

    const textarea = wrapper.find("textarea");
    const label = wrapper.find("label");

    expect(textarea.props().name).toEqual("field1");
    expect(textarea.props().type).toEqual("text");
    expect(textarea.props().value).toEqual("Text");
    expect(textarea.props().readOnly).toEqual(true);
    expect(label.props().children).toEqual("textarea Test");
  });
});
