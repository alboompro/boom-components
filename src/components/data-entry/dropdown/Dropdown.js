import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ ...props }) => <div />

Dropdown.propTypes = {
  /** whether dropdown menu is disabled */
  disabled: PropTypes.bool,
  /** Set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. */
  getPopupContainer: PropTypes.func,
  /** the dropdown content */
  content: PropTypes.node,
  /** placement of content */
  position: PropTypes.oneOf(['bottomCenter', 'bottomLeft', 'bottomRight', 'topCenter', 'topLeft', 'topRight']),
  /** trigger which executes the dropdown action (hover doesn't work on mobile devices) */
  trigger: PropTypes.arrayOf(PropTypes.oneOf(['click', 'contextMenu', 'hover'])),
  /** callback when content show or hide */
  onVisibleChange: PropTypes.func
}

Dropdown.defaultProps = {
  disabled: false,
  getPopupContainer: () => document.body,
  position: 'bottomLeft',
  trigger: ['hover']
}

export default Dropdown
