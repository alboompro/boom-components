import React from "react";
import PropTypes from "prop-types";
import Icon from "../../general/icon/Icon";

import {
  CheckboxContainer,
  CheckboxContent,
  CheckboxInput,
  Label
} from "./styles";

const Checkbox = ({
  className,
  checkboxStyle,
  labelStyle,
  onChange,
  checked,
  label,
  defaultChecked,
  disabled,
  style
}) => (
  <CheckboxContainer disabled={disabled} className={className} style={style}>
    <CheckboxContent onClick={!disabled && onChange}>
      <CheckboxInput checked={defaultChecked || checked} style={checkboxStyle}>
        {checked && (
          <Icon
            kind="bold"
            group="interface-essential"
            category="form-validation"
            file="check.svg"
            size="10"
            color="#fff"
          />
        )}
      </CheckboxInput>
      <Label style={labelStyle}>{label}</Label>
    </CheckboxContent>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  /** add custom className */
  className: PropTypes.string,
  /** component main style */
  style: PropTypes.object,
  /** whether checkbox is checked */
  checked: PropTypes.bool,
  /** specifies the initial state of checkbox */
  defaultChecked: PropTypes.bool,
  /** disabled status of checkbox */
  disabled: PropTypes.bool,
  /** callback when state changes */
  onChange: PropTypes.func,
  /** add custom style to input */
  checkboxStyle: PropTypes.object,
  /** add custom style to label */
  labelStyle: PropTypes.object
};

Checkbox.defaultProps = {
  className: "",
  checked: false,
  defaultChecked: false,
  disabled: false,
  onChange: null,
  checkboxStyle: null,
  labelStyle: null,
  style: null
};

export default Checkbox;
