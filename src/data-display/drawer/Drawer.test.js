import React from "react";
import { mount, shallow } from "enzyme";

import Drawer from "./Drawer.js";
import { Backdrop } from "./styles.js";

describe("Drawer - Snapshot", () => {
  test("Renders the component correctly", () => {
    const wrapper = shallow(
      <Drawer
        title="Drawer title"
        backdrop={false}
        backdropClosable={false}
        backdropStyle={{ backgroundColor: "red" }}
        closeButton={false}
        zIndex={1001}
        animationDelay={777}
        height={450}
        width={600}
        placement="top"
        handleClose={() => console.log("handleClose")}
        visible
      >
        <div>Drawer Content</div>
      </Drawer>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe("Drawer - Behavior", () => {
  test("Values ​​of props are correct", () => {
    const wrapper = mount(
      <Drawer
        title="Drawer title"
        backdrop={false}
        backdropClosable={false}
        backdropStyle={{ backgroundColor: "red" }}
        closeButton={false}
        zIndex={1001}
        animationDelay={777}
        height={450}
        width={600}
        placement="top"
        handleClose={() => console.log("handleClose")}
        visible
      >
        <div>Drawer Content</div>
      </Drawer>
    );

    expect(wrapper.props().visible).toBe(true);
    expect(wrapper.props().title).toBe("Drawer title");
    expect(wrapper.props().closeButton).toBe(false);
    expect(wrapper.props().animationDelay).toBe(777);
    expect(wrapper.props().backdropClosable).toBe(false);
    expect(wrapper.props().backdropStyle).toEqual({ backgroundColor: "red" });
    expect(wrapper.props().zIndex).toBe(1001);
    expect(wrapper.props().placement).toBe("top");
    expect(wrapper.props().width).toBe(600);
    expect(wrapper.props().height).toBe(450);
  });

  test("Click on the backdrop to close the drawer", () => {
    const wrapper = mount(
      <Drawer
        title="Drawer title"
        handleClose={() => console.log("handleClose")}
        visible
      >
        <div>Drawer Content</div>
      </Drawer>
    );

    expect(wrapper.props().visible).toBe(true);

    wrapper.find(Backdrop).simulate("click");
    setTimeout(() => {
      expect(wrapper.find(Drawer).length).toBe(0);
    }, wrapper.props().animationDelay);
  });
});
