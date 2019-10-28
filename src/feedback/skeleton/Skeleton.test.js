import React from "react";
import { shallow } from "enzyme";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  describe("Snapshot", () => {
    it("should render a skeleton", () => {
      const wrapper = shallow(<Skeleton ready={false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
