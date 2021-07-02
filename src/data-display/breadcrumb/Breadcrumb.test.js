import React from "react";
import { mount } from "enzyme";
import Breadcrumb from "./Breadcrumb";

test('Shows a breadcrumb', () => {
    const selected = crumb => {console.log(crumb)};
    const crumbs = [
        {
            name: 'Home', 
            link: '#'
        },
        {
            name: 'Category', 
            link: '#'
        },
        {
            name: 'Sub-Category', 
            link: '#'
        }
    ];

    const wrapper = mount(<Breadcrumb crumbs={crumbs} selected={selected} />);
    expect(wrapper.text()).toMatch('Home','Category','Sub-Category');
  });