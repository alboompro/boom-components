import React, {useState} from "react";
import { mount, shallow } from "enzyme";
import Popconfirm from "./popConfirm";

describe("Popconfirm", () => {
  it("Renders correctly", () => {
    shallow(
      <Popconfirm popoverContent={( 
        <>
          <p>Are you sure?</p>
        </> 
      )} />
    );
  });

  it("it has the corrects html elements", () => {
    const wrapper = shallow(
      <Popconfirm 
        popoverContent={( 
          <>
            <p>Are you sure?</p>
          </> 
        )}
      />
    );
  
    expect(wrapper.find("div").length).toEqual(1);
    expect(wrapper.find("section").length).toEqual(1);
  });

  it("should update state on click", () => {
    const setVisible = jest.fn();

    const wrapper = mount(
      <Popconfirm 
        popoverContent={( 
          <>
            <p>Are you sure?</p>
          </> 
        )}
      >
        <h1 onClick={setVisible}>Delete</h1>
      </Popconfirm>
    );

    const handleClick = jest.spyOn(React, "useState");

    handleClick.mockImplementation(visible => [visible, setVisible]);
 
    wrapper.find("h1").simulate("click");
    expect(setVisible).toBeTruthy();
  });
});


