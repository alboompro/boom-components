import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ ...props }) => <div />

Modal.propTypes = {
  /** modal background color (can be set to transparent) */
  background: PropTypes.string,
  /** modal content */
  content: PropTypes.node.isRequired,
  /** callback when modal show or hide */
  onVisibleChange: PropTypes.func,
  /** whether modal is rounded */
  rounded: PropTypes.bool,
  /** modal title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether modal is visible */
  visible: PropTypes.bool
}

Modal.defaultProps = {
  background: 'white',
  rounded: true,
  visible: false
}

export default Modal
