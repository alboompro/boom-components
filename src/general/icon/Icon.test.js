import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("Icon", () => {
  describe("Displaying an icon that exists", () => {
    test("renders the given icon", () => {
      const wrapper = shallow(
        <Icon
          kind="bold"
          group="arrows-diagrams"
          category="arrows"
          file="arrow-button-left-2-alternate.svg"
          size="64"
          color="#000000"
        />
      );
      expect(wrapper.html()).toBe(
        // eslint-disable-next-line quotes
        '<img alt="Icone" src="https://icons.alboompro.com/v1/bold/arrows-diagrams/arrows/000000/arrow-button-left-2-alternate.svg" width="64" height="64"/>'
      );
    });
  });
});
