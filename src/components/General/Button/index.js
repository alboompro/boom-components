import React from 'react'
import PropTypes from 'prop-types'

import { DefaultBtn, Icon, Text } from './styles'

const Button = ({ className, children, textStyle, style, type, icon, iconStyle, disabled, onClick }) => {
  return (
    <DefaultBtn type={type} className={className} onClick={onClick} disabled={disabled} style={style}>
      {icon && <Icon style={iconStyle}>{icon}</Icon>}
      <Text style={textStyle}>{children}</Text>
    </DefaultBtn>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  icon: PropTypes.element,
  iconStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
