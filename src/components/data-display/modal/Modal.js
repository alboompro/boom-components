import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ ...props }) => <div />

Modal.propTypes = {
  /** callback when modal is completely closed */
  afterClose: PropTypes.func,
  /** whether to show backdrop or not (area outside of the drawer) */
  backdrop: PropTypes.bool,
  /** whether to click on backdrop should close drawer */
  backdropClosable: PropTypes.bool,
  /** style of backdrop */
  backdropStyle: PropTypes.object,
  /** modal background color (can be set to transparent) */
  background: PropTypes.string,
  /** style of modal body content */
  bodyStyle: PropTypes.object,
  /** whether a close button is visible on top right corner of modal */
  closeButton: PropTypes.bool,
  /** modal content */
  content: PropTypes.node.isRequired,
  /** whether to unmount child components on close */
  destroyOnClose: PropTypes.bool,
  /** style of floating layer which is used for adjusting its position */
  floatingStyle: PropTypes.object,
  /** footer content */
  footer: PropTypes.node,
  /** return the mount node for modal */
  getContainer: PropTypes.func,
  /** callback when modal show or hide */
  onVisibleChange: PropTypes.func,
  /** whether modal is rounded */
  rounded: PropTypes.bool,
  /** modal title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether modal is visible */
  visible: PropTypes.bool,
  /** width of modal */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of modal */
  zIndex: PropTypes.number
}

Modal.defaultProps = {
  backdrop: true,
  backdropClosable: true,
  background: 'white',
  closeButton: true,
  destroyOnClose: false,
  getContainer: () => document.body,
  rounded: true,
  visible: false,
  width: 520,
  zIndex: 1000
}

export default Modal
