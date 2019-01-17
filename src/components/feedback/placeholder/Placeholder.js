import React from 'react'
import PropTypes from 'prop-types'

const Placeholder = ({ ...props }) => <div />

Placeholder.propTypes = {
  /** whether show animation */
  animated: PropTypes.bool,
  /** whether show avatar placeholder */
  avatar: PropTypes.bool,
  /** whether show the placeholder or content */
  loading: PropTypes.bool,
  /** whether show paragraph placeholder */
  paragraph: PropTypes.bool,
  /** whether show title placeholder */
  title: PropTypes.bool
}

Placeholder.defaultProps = {
  animated: false,
  avatar: false,
  loading: false,
  paragraph: true,
  title: true
}

export default Placeholder
