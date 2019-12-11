import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../helpers";

import { Label, RadioButton } from "./styles";

const Radio = ({
  id,
  name,
  value,
  defaultChecked,
  label,
  onChange,
  disabled,
  className,
  style
}) => (
  <Label
    htmlFor={id}
    onChange={onChange}
    disabled={disabled}
    className={className}
    style={style}
  >
    <RadioButton
      disabled={disabled}
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
    />
    {label}
  </Label>
);

Radio.propTypes = {
  /** add custom className */
  className: PropTypes.string,
  /** specifies the initial state of radio */
  defaultChecked: PropTypes.bool,
  /** disabled click of radio */
  disabled: PropTypes.bool,
  /** specifies id of radio */
  id: PropTypes.string.isRequired,
  /** label of radio */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** name of radio group */
  name: PropTypes.string.isRequired,
  /** callback when click radio */
  onChange: PropTypes.func,
  /** component main style */
  style: PropTypes.object,
  /** value of radio when selected */
  value: PropTypes.string.isRequired
};

Radio.defaultProps = {
  className: "",
  defaultChecked: false,
  disabled: false,
  onChange: noop,
  style: null
};

export default Radio;
