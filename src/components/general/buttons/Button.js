import React from 'react'
import PropTypes from 'prop-types'

import { DefaultBtn, Icon, Text } from './styles'

/**
 * Component to trigger an operation.
 *
 * @param {*} { className, children, textStyle, style, type, icon, iconStyle, disabled, onClick }
 * @returns {Component}
 */
const Button = ({ children, textStyle, icon, iconStyle, ...props }) => (
  <DefaultBtn {...props}>
    {icon && <Icon style={iconStyle}>{icon}</Icon>}
    <Text style={textStyle}>{children}</Text>
  </DefaultBtn>
)

Button.propTypes = {
  /** text of button */
  children: PropTypes.string.isRequired,
  /** set the class of button */
  className: PropTypes.string,
  /** disabled state of the button */
  disabled: PropTypes.bool,
  /** set the icon of button */
  icon: PropTypes.element,
  /** set the style of icon */
  iconStyle: PropTypes.object,
  /** set the handler of click event */
  onClick: PropTypes.func,
  /** set the style of button */
  style: PropTypes.object,
  /** set the style of text */
  textStyle: PropTypes.object,
  /** HTML type of button */
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
}

Button.defaultProps = {
  children: '',
  disabled: false,
  type: 'button'
}

export default Button
