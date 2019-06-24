import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";
import {
  ModalBackdrop,
  ModalContainer,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "./styles";

Enzyme.configure({ adapter: new Adapter() });

describe("Modal", () => {
  test("modal props", () => {
    const wrapper = mount(
      <Modal
        backdrop={false}
        backdropClosable={false}
        backdropStyle={{ backgroundColor: "red" }}
        bodyStyle={{ backgroundColor: "blue" }}
        background="#d6d6d6"
        closeButton
        floatingStyle={{ top: "20px" }}
        footer={<div>Modal footer</div>}
        onClick={() => console.log("click")}
        rounded
        title="Modal title"
        zIndex={9999}
        width={600}
        visible
      >
        <div>Modal Content</div>
      </Modal>
    );
    
    const modalContainer = wrapper.find(ModalContainer).props();
    const modalBackdrop = wrapper.find(ModalBackdrop).props();
    const modalTitle = wrapper.find(ModalTitle).props();
    const modalBody = wrapper.find(ModalBody).props();
    const modalFooter = wrapper.find(ModalFooter).props();

    expect(wrapper.props().visible).toEqual(true);
    expect(wrapper.props().closeButton).toEqual(true);

    expect(modalBackdrop.backdrop).toEqual(false);
    expect(modalBackdrop.backdropStyle).toEqual({ backgroundColor: "red" });
    expect(modalBackdrop.zIndex).toEqual(9999);
    expect(modalBackdrop.floatingStyle).toEqual({ top: "20px" });

    expect(modalContainer.rounded).toEqual(true);
    expect(modalContainer.background).toEqual("#d6d6d6");
    expect(modalContainer.width).toEqual(600);
    expect(modalContainer.floatingStyle).toEqual({ top: "20px" });

    expect(modalBody.children).toEqual(<div>Modal Content</div>);
    expect(modalBody.bodyStyle).toEqual({ backgroundColor: "blue" });

    expect(modalFooter.children).toEqual(<div>Modal footer</div>);

    expect(modalTitle.children).toEqual("Modal title");
  });
});
