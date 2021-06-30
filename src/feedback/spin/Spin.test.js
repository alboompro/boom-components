import React from "react";
import { mount } from "enzyme";
import Spin from "./Spin";

describe("Input", () => {
  test("input props", () => {
    const wrapper = mount(
      <Spin
        delay={500}
        size="large"
        spinner={(
          <div>Teste</div>
        )}
        spinning={false}
        text="Carregando..."
      >
        <div>children</div>
      </Spin>
    );

    expect(wrapper.props().delay).toEqual(500);
    expect(wrapper.props().size).toEqual("large");
    expect(wrapper.props().spinner).toEqual(<div>Teste</div>);
    expect(wrapper.props().spinning).toEqual(false);
    expect(wrapper.props().text).toEqual("Carregando...");
    expect(wrapper.props().children).toEqual(<div>children</div>);
  });
});