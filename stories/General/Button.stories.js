import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import withPropsCombinations from 'react-storybook-addon-props-combinations'

import { Button } from '../../src/components'

storiesOf('Button', module).add(
  'Standard usage',
  withPropsCombinations(Button, {
    children: ['Hello Button'],
    disabled: [true, false],
    onClick: [action('clicked')],
    textStyle: [null, { color: '#f00' }]
  })
)
