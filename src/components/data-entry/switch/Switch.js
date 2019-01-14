import React from 'react'
import PropTypes from 'prop-types'

const Switch = ({ ...props }) => <div />

Switch.propTypes = {
  /** whether switch is checked */
  checked: PropTypes.bool,
  /** specifies the initial state of switch */
  defaultChecked: PropTypes.bool,
  /** disabled status of switch */
  disabled: PropTypes.bool,
  /** size of switch */
  size: PropTypes.oneOf(['small', 'default']),
  /** callback when state changes */
  onChange: PropTypes.func
}

Switch.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  size: 'default'
}

export default Switch
