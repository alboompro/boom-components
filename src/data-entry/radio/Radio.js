import React from "react";
import PropTypes from "prop-types";

import {
  RadioContainer,
  RadioContent,
  RadioButtonLabel,
  RadioInput,
  Label
} from "./styles";

const Radio = ({
  className,
  RadioStyle,
  labelStyle,
  onChange,
  label,
  name,
  disabled,
  select,
  style,
  value
}) => (
  <RadioContainer disabled={disabled} className={className} style={style}>
    <RadioContent onClick={!disabled && onChange}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={value === select}
        style={RadioStyle}
      />
      <RadioButtonLabel />
      <Label style={labelStyle}>{label}</Label>
    </RadioContent>
  </RadioContainer>
);

Radio.propTypes = {
  /** add custom className */
  className: PropTypes.string,
  /** component main style */
  style: PropTypes.object,
  /** whether Radio is checked */
  disabled: PropTypes.bool,
  /** callback when state changes */
  onChange: PropTypes.func,
  /** add custom style to input */
  RadioStyle: PropTypes.object,
  /** add custom style to label */
  labelStyle: PropTypes.object
};

Radio.defaultProps = {
  className: "",
  disabled: false,
  onChange: null,
  RadioStyle: null,
  labelStyle: null,
  style: null
};

export default Radio;
