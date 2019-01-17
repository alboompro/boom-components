import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ ...props }) => <div />

Tooltip.propTypes = {
  /** whether to adjust popup placement automatically when it is off screen */
  autoAdjustOverflow: PropTypes.bool,
  /** whether it is visible by default */
  defaultVisible: PropTypes.bool,
  /** mount node of tooltip */
  getContainer: PropTypes.func,
  /** delay in miliseconds before tooltip is shown on mouse enter */
  mouseEnterDelay: PropTypes.number,
  /** delay in miliseconds before tooltip is hidden on mouse leave */
  mouseLeaveDelay: PropTypes.number,
  /** callback when tooltip is visible or not */
  onVisibleChange: PropTypes.func,
  /** placement of tooltip relative to its target */
  placement: PropTypes.oneOf([
    'topLeft',
    'top',
    'topRight',
    'rightTop',
    'right',
    'rightBottom',
    'bottomRight',
    'bottom',
    'bottomLeft',
    'leftBottom',
    'left',
    'leftTop'
  ]),
  /** tooltip trigger */
  trigger: PropTypes.oneOf(['click', 'contextMenu', 'focus', 'hover']),
  /** whether tooltip is visible */
  visible: PropTypes.bool
}

Tooltip.defaultProps = {
  autoAdjustOverflow: true,
  defaultVisible: false,
  getContainer: () => document.body,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 100,
  placement: 'top',
  trigger: 'hover',
  visible: false
}

export default Tooltip
