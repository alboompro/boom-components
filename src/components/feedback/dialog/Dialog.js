import React from 'react'
import PropTypes from 'prop-types'

const Dialog = ({ ...props }) => <div />

Dialog.propTypes = {
  /** whether to show backdrop or not (area outside of the drawer) */
  backdrop: PropTypes.bool,
  /** whether to click on backdrop should close drawer */
  backdropClosable: PropTypes.bool,
  /** style of backdrop */
  backdropStyle: PropTypes.object,
  /** dialog background color (can be set to transparent) */
  background: PropTypes.string,
  /** style of dialog body content */
  bodyStyle: PropTypes.object,
  /** dialog content */
  content: PropTypes.node.isRequired,
  /** whether to unmount child components on close */
  destroyOnClose: PropTypes.bool,
  /** style of floating layer which is used for adjusting its position */
  floatingStyle: PropTypes.object,
  /** footer content, it comes with ok and cancel buttons by default */
  footer: PropTypes.node,
  /** return the mount node for dialog */
  getContainer: PropTypes.func,
  /** callback when dialog show or hide */
  onVisibleChange: PropTypes.func,
  /** whether dialog is rounded */
  rounded: PropTypes.bool,
  /** dialog title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether dialog is visible */
  visible: PropTypes.bool,
  /** width of dialog */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of dialog */
  zIndex: PropTypes.number
}

Dialog.defaultProps = {
  backdrop: true,
  backdropClosable: false,
  background: 'white',
  closeButton: true,
  destroyOnClose: false,
  getContainer: () => document.body,
  rounded: true,
  visible: false,
  width: 416,
  zIndex: 1000
}

export default Dialog
