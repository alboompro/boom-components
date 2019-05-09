import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";

import { DefaultInput } from "./styles";

/**
 * Basic text field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */
const Input = ({ size, ...props }) => <DefaultInput size={size} {...props} />;

Input.propTypes = {
  /** label text or component displayed on the right side of the input */
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** label text or component displayed on the left side of the input */
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether input content can be removed with clear icon */
  clearable: PropTypes.bool,
  /** initial input content */
  defaultValue: PropTypes.string,
  /** disabled state of the input */
  disabled: PropTypes.bool,
  /** callback when value changes */
  onChange: PropTypes.func,
  /** callback when enter key is pressed */
  onPressEnter: PropTypes.func,
  /** prefix icon inside input */
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** suffix icon inside input */
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** HTML type of input */
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ]),
  /** size of the input box */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /** input content value */
  value: PropTypes.string
};

Input.defaultProps = {
  addonAfter: null,
  addonBefore: null,
  clearable: true,
  defaultValue: null,
  disabled: false,
  onChange: noop,
  onPressEnter: noop,
  size: "default",
  type: "text",
  prefix: null,
  suffix: null,
  value: null
};

export default Input;
