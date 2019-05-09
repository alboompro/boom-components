import React from "react";
import { shallow, mount, render } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  test("renders", () => {
    const wrapper = shallow(<Button>Me aperte</Button>);
    expect(wrapper.find("Button")).toBeDefined();
  });
});
