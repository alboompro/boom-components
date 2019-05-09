import React from "react";
import PropTypes from "prop-types";

const Radio = ({ ...props }) => <div />;

Radio.propTypes = {
  /** whether radio is selected */
  checked: PropTypes.bool,
  /** specifies the initial state of radio */
  defaultChecked: PropTypes.bool,
  /** disabled status of radio */
  disabled: PropTypes.bool,
  /** for comparison, to determine whether is the selected  */
  value: PropTypes.any
};

Radio.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  value: null
};

export default Radio;
