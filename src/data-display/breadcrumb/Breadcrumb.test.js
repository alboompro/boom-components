import React from "react";
import { mount } from "enzyme";
import Breadcrumb from "./Breadcrumb";
import Icon from '../../general/icon'

test('Shows a breadcrumb', () => {
    const crumbs = [
        {
            customNode: <a href="#"> Home </a>
        },
        {
            name: 'Busca', 
            link: '#',
            icon: <Icon kind="bold" group="arrows-diagrams" category="arrows" file="arrow-button-right.svg" size="10" color="#000000" />,
        },
        {
            name: 'Nuvem', 
            link: '#',
            separator: "/"
        }
    ];

    const wrapper = mount(<Breadcrumb crumbs={crumbs} />);
    expect(wrapper.text()).toMatch('Home','Busca','Nuvem');
  });