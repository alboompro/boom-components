import React from 'react'
import PropTypes from 'prop-types'

import { DefaultInput } from './styles'

/**
 * Basic text field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */
const Input = ({ size, ...props }) => <DefaultInput size={size} {...props} />

Input.propTypes = {
  /** callback when value changes */
  onChange: PropTypes.func,
  /** size of the input box */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /** input content value */
  value: PropTypes.string
}

Input.defaultProps = {
  size: 'default'
}

export default Input
