import React from 'react'
import { mount } from 'enzyme'

import Input from './Input'

describe('Input', () => {
  test('Snapshot', () => {
    const wrapper = mount(<Input value="Test" readOnly />)
    const tree = wrapper.find(Input)

    expect(tree).toMatchSnapshot()
  })
})
