import React from 'react'
import PropTypes from 'prop-types'

import { DefaultBtn, Icon, Text } from './styles'

/**
 * Component to trigger an operation.
 *
 * @param {*} { children, textStyle, icon, iconStyle, htmlType, type, ...props }
 * @returns {Component}
 */
const Button = ({ children, textStyle, icon, htmlType, type, ...props }) => (
  <DefaultBtn type={htmlType} colorType={type} {...props}>
    {icon && <Icon>{icon}</Icon>}
    <Text style={textStyle}>{children}</Text>
  </DefaultBtn>
)

Button.propTypes = {
  /** text of button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** set the class of button */
  className: PropTypes.string,
  /** disabled state of the button */
  disabled: PropTypes.bool,
  /** redirect url of link button */
  href: PropTypes.string,
  /** HTML type of button */
  htmlType: PropTypes.oneOf(['button', 'reset', 'submit']),
  /** set the icon of button */
  icon: PropTypes.string,
  /** set the loading status of button */
  loading: PropTypes.bool,
  /** set the handler of click event */
  onClick: PropTypes.func,
  /** make background transparent and invert text and border colors */
  outlined: PropTypes.bool,
  /** make button circular */
  rounded: PropTypes.bool,
  /** size of the button */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /** fit button width to its parent width */
  stretched: PropTypes.bool,
  /** set the style of button */
  style: PropTypes.object,
  /** same as target attr of a but works only when href is specified */
  target: PropTypes.string,
  /** set the style of text */
  textStyle: PropTypes.object,
  /** set the pattern of button */
  type: PropTypes.oneOf(['default', 'primary'])
}

Button.defaultProps = {
  disabled: false,
  htmlType: 'button',
  loading: false,
  outlined: false,
  rounded: false,
  size: 'default',
  stretched: false,
  type: 'default'
}

export default Button
