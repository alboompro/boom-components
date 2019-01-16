import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ ...props }) => <div />

Avatar.propTypes = {
  /** alternative text describing the image */
  alt: PropTypes.string,
  /** icon of avatar */
  icon: PropTypes.string,
  /** callback when image load fail, return false to prevent default behavior */
  onError: PropTypes.func,
  /** size of avatar */
  size: PropTypes.oneOf(['default', 'large', 'small']),
  /** whether avatar should be square */
  square: PropTypes.bool,
  /** address of the image */
  src: PropTypes.string,
  /** a list of sources to use for different screen resolutions */
  srcSet: PropTypes.string
}

Avatar.defaultProps = {
  size: 'default',
  square: false
}

export default Avatar
