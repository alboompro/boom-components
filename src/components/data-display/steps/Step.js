import React from 'react'
import PropTypes from 'prop-types'

const Step = ({ ...props }) => <div />

Step.propTypes = {
  /** description of the step */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** icon of the step */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** status of step */
  status: PropTypes.oneOf(['error', 'finished', 'processing', 'waiting']),
  /** title of the step */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

Step.defaultProps = {
  status: 'waiting'
}

export default Step
