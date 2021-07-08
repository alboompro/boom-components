import React from "react";
import { shallow } from "enzyme";

import ProfilePicture from "./ProfilePicture";
import Icon from "../../general/icon";

describe("Profile Picture", () => {
  describe("Displaying the profile picture component with the initials", () => {
    test("render the component with the initials", () => {
      const wrapper = shallow(
        <ProfilePicture
          alt="Boom Components Profile Picture"
          fontSize="19px"
          fullName="Boom Components"
          size="60px"
          src={null}
          badge={
            <Icon
              kind="bold"
              group="interface-essential"
              category="form-validation"
              file="check-circle-1.svg"
              color="#1B9DFA"
              size="20px"
            />
          }
          badgePosition={{
            right: 0,
            bottom: 0
          }}
        />
      );
      expect(wrapper.html()).toBe(
        // eslint-disable-next-line quotes
        '<div style="display:inline-flex;justify-content:center;align-items:center;position:relative;width:60px;height:60px;border-radius:50%;background-color:#D467E5;color:#FFFFFF;font-size:19px">BC<div style="display:flex;justify-content:center;align-items:center;position:absolute;right:0;bottom:0;border-radius:50%;background-color:#FFFFFF"><img alt="Icone" src="https://icons.alboompro.com/v1/bold/interface-essential/form-validation/1B9DFA/check-circle-1.svg" width="20px" height="20px"/></div></div>'
      );
    });
  });
});
