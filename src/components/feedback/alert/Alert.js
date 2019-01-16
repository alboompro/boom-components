import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ ...props }) => <div />

Alert.propTypes = {
  /** callback after close animation is finished */
  afterClose: PropTypes.func,
  /** whether to show as banner */
  banner: PropTypes.bool,
  /** whether alert can be closed */
  closable: PropTypes.bool,
  /** close text to show */
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** additional content of alert */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** custom icon, effective when showIcon is true */
  icon: PropTypes.node,
  /** content of alert */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** callback when alert is closed */
  onClose: PropTypes.func,
  /** whether to show icon (if banner is true default is true) */
  showIcon: PropTypes.bool,
  /** alert style */
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error'])
}

Alert.defaultProps = {
  banner: false,
  closable: false
}

export default Alert
