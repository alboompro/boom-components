import React from 'react'
import PropTypes from 'prop-types'

const Slider = ({ ...props }) => <div />

Slider.propTypes = {
  /** Default value of slider. Use [number, number] when range is true, otherwise use number. */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  /** disabled status of slider */
  disabled: PropTypes.bool,
  /** maximum value of slider */
  max: PropTypes.number,
  /** minimum value of slider */
  min: PropTypes.number,
  /** callback when state changes */
  onChange: PropTypes.func,
  /** dual thumb mode */
  range: PropTypes.bool,
  /** Granularity of slider. Must be greater than 0 and be divided by (max - min). */
  step: PropTypes.number,
  /** value of slider */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  /** displayed value in the tooltip */
  valueFormatter: PropTypes.func,
  /** whether slider is vertical */
  vertical: PropTypes.bool,
  /** whether tooltip always show or never show */
  tooltipVisible: PropTypes.bool
}

Slider.defaultProps = {
  defaultValue: 0,
  disabled: false,
  max: 100,
  min: 0,
  range: false,
  step: 1,
  vertical: false
}

export default Slider
