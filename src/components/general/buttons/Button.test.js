import React from 'react'
import { mount } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  test('Snapshot', () => {
    const wrapper = mount(<Button>Test</Button>)
    const tree = wrapper.find(Button)

    expect(tree).toMatchSnapshot()
  })
})
