import React from 'react'
import PropTypes from 'prop-types'

import { DefaultBtn, Icon, Text } from './styles'

/**
 * Component to trigger an operation.
 *
 * @param {*} { children, textStyle, icon, iconStyle, htmlType, type, ...props }
 * @returns {Component}
 */
const Button = ({ children, textStyle, icon, iconStyle, htmlType, type, ...props }) => (
  <DefaultBtn type={htmlType} colorType={type} {...props}>
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
  /** HTML type of button */
  htmlType: PropTypes.oneOf(['button', 'reset', 'submit']),
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
  /** set the pattern of button */
  type: PropTypes.oneOf(['default', 'primary'])
}

Button.defaultProps = {
  children: '',
  disabled: false,
  htmlType: 'button',
  type: 'default'
}

export default Button
