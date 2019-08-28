import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";

describe("Collapse", () => {
  describe("Snapshot", () => {
    it("should render a collapse", () => {
      const menu = (
        <ul>
          <li>1st Menu Item</li>
          <li>2nd Menu Item</li>
          <li>3rd Menu Item</li>
        </ul>
      );
      const wrapper = shallow(
        <Dropdown menu={menu}>
          <a>Hover me!</a>
        </Dropdown>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
