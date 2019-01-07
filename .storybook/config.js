import { configure } from '@storybook/react'

import { setDefaults } from 'react-storybook-addon-props-combinations'

setDefaults()

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
