import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import { SwitchComponent } from "./styles";

const Switch = ({ checked, onChange, disabled }) => (
  <SwitchComponent
    onClick={onChange}
    checked={checked}
    disabled={disabled}
  />
);

Switch.propTypes = {
  /** whether switch is checked */
  checked: PropTypes.bool,
  /** disabled status of switch */
  disabled: PropTypes.bool,
  /** size of switch */
  // size: PropTypes.oneOf(["small", "default"]),
  /** callback when state changes */
  onChange: PropTypes.func
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop
};

export default Switch;
