import React from 'react'
import PropTypes from 'prop-types'

const Steps = ({ ...props }) => <div />

Steps.propTypes = {
  /** Current step counting from 0. Using status of Step this will be overwritten. */
  current: PropTypes.number,
  /** set initial step counting from 0 */
  initial: PropTypes.number,
  /** size of step bar */
  size: PropTypes.oneOf(['default', 'small']),
  /** Steps with dot style. Vertical will be set to true. */
  useDots: PropTypes.bool,
  /** whether steps are vertical */
  vertical: PropTypes.bool,
  /** whether labels are in vertical direction */
  verticalLabels: PropTypes.bool
}

Steps.defaultProps = {
  current: 0,
  initial: 0,
  size: 'default',
  useDots: false,
  vertical: false,
  verticalLabels: false
}

export default Steps
