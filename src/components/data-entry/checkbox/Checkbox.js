import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ ...props }) => <div />

Checkbox.propTypes = {
  /** whether checkbox is checked */
  checked: PropTypes.bool,
  /** specifies the initial state of checkbox */
  defaultChecked: PropTypes.bool,
  /** disabled status of checkbox */
  disabled: PropTypes.bool,
  /** specifies indeterminate status of checkbox */
  indeterminate: PropTypes.bool,
  /** callback when state changes */
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  indeterminate: false
}

export default Checkbox
