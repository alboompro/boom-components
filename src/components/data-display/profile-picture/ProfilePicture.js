import React from 'react'
import PropTypes from 'prop-types'

const ProfilePicture = ({ ...props }) => <div />

ProfilePicture.propTypes = {
  /** alternative text describing the image */
  alt: PropTypes.string,
  /** icon of profile picture */
  icon: PropTypes.string,
  /** callback when image load fail, return false to prevent default behavior */
  onError: PropTypes.func,
  /** size of profile picture */
  size: PropTypes.oneOf(['default', 'large', 'small']),
  /** whether profile picture should be square */
  square: PropTypes.bool,
  /** address of the image */
  src: PropTypes.string,
  /** a list of sources to use for different screen resolutions */
  srcSet: PropTypes.string
}

ProfilePicture.defaultProps = {
  size: 'default',
  square: false
}

export default ProfilePicture
