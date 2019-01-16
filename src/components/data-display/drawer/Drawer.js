import React from 'react'
import PropTypes from 'prop-types'

const Drawer = ({ ...props }) => <div />

Drawer.propTypes = {
  /** whether to show backdrop or not (area outside of the drawer) */
  backdrop: PropTypes.bool,
  /** whether to click on backdrop should close drawer */
  backdropClosable: PropTypes.bool,
  /** style of backdrop */
  backdropStyle: PropTypes.object,
  /** style of floating layer which is used for adjusting its position */
  bodyStyle: PropTypes.object,
  /** whether a close button is visible on top right corner of drawer */
  closeButton: PropTypes.bool,
  /** whether to unmount child components on close */
  destroyOnClose: PropTypes.bool,
  /** return the mounted node for drawer */
  getContainer: PropTypes.func,
  /** height of drawer while its placement is top or bottom */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** callback when visible state changes */
  onVisibleChange: PropTypes.func,
  /** placement of drawer */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** title of drawer */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether drawer is visible or not */
  visible: PropTypes.bool,
  /** width of drawer while its placement is right or left */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of drawer */
  zIndex: PropTypes.number
}

Drawer.defaultProps = {
  backdrop: true,
  backdropClosable: true,
  closeButton: true,
  destroyOnClose: false,
  getContainer: () => document.body,
  height: 256,
  placement: 'right',
  visible: false,
  width: 256,
  zIndex: 1000
}

export default Drawer
