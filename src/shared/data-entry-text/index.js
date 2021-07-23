import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import Icon from "../../general/icon/Icon";

import {
  DefaultDataEntryTextContainer,
  Label,
  InputContent,
  InputField,
  ErrorLabel,
  InputIcon,
  ClearebleIcon,
  Description,
  InputSuffix,
  InputSuffixLabel,
  HelpTextLabel,
  InputSuffixCounter,
  DefaultDataEntryCSS,
  inputSettings as InputSettingsCSS
} from "./styles";

export class DefaultDataEntryText extends Component {
  state = {
    value: ""
  };

  getDataEntryType = inputProps => {
    throw "Must be implemented";
  };

  onKeyDown = e => {
    const { onPressEnter, onKeyPress } = this.props;
    const keycode = e.keyCode ? e.keyCode : e.which;

    if (onPressEnter && (e.key === "Enter" || keycode === "13")) {
      onPressEnter(e);
    }

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  cleanInput = () => {
    const { name, clearable, formik } = this.props;
    let defaultContent = "";

    if (typeof clearable === "function") {
      defaultContent = clearable();
    }

    if (formik) {
      formik.setFieldValue(name, defaultContent, false);
    } else {
      this.setState({ value: defaultContent });
    }
  };

  onChange = e => {
    const { onChange, formik } = this.props;
    if (typeof onChange === "function" && formik) {
      onChange(e);
    } else if (typeof onChange === "function") {
      onChange(e, this);
    } else {
      onChange(e, this);
      this.setState({ value: e.target.value });
    }
  };

  render() {
    const {
      className,
      clearable,
      clearablePosition,
      disabled,
      error,
      inputStyle,
      label,
      labelStyle,
      name,
      onBlur,
      onKeyUp,
      placeholder,
      prefix,
      readOnly,
      suffix,
      type,
      value,
      formik,
      description,
      helpText,
      maxLength,
      showCounter
    } = this.props;

    const { value: stateValue } = this.state;
    const inputProps = {
      value: stateValue || value,
      name,
      type,
      placeholder,
      inputStyle,
      disabled,
      readOnly,
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      onKeyUp,
      error
    };

    if (maxLength) inputProps.value = inputProps.value.substring(0, maxLength);

    if (onBlur) inputProps.onBlur = onBlur;

    return (
      <DefaultDataEntryTextContainer error={error} className={className}>
        {label && <Label labelStyle={labelStyle}>{label}</Label>}
        {description && <Description>{description}</Description>}
        <InputContent error={error}>
          {prefix && <InputIcon prefix={prefix}>{prefix}</InputIcon>}
          {suffix && (
            <InputIcon suffix={suffix} clearable={clearable}>
              {suffix}
            </InputIcon>
          )}
          <InputField prefix={prefix} suffix={suffix} clearable={clearable}>
            {formik ? (
              <Field
                name={name}
                render={({ field }) => {
                  return this.getDataEntryType({ ...inputProps, ...field });
                }}
              />
            ) : (
              this.getDataEntryType(inputProps)
            )}
            {inputProps.value && clearable && (
              <ClearebleIcon
                clearablePosition={clearablePosition}
                onClick={() => this.cleanInput()}
              >
                <Icon
                  kind="bold"
                  group="interface-essential"
                  category="form-validation"
                  file="close.svg"
                  size="13"
                  color="c9c9c9"
                />
              </ClearebleIcon>
            )}
          </InputField>
        </InputContent>
        <InputSuffix>
          <InputSuffixLabel>
            {error && error.message && <ErrorLabel>{error.message}</ErrorLabel>}
            {helpText && helpText && <HelpTextLabel>{helpText}</HelpTextLabel>}
          </InputSuffixLabel>
          {maxLength && showCounter && (
            <InputSuffixCounter>
              {inputProps.value.length}/{maxLength}
            </InputSuffixCounter>
          )}
        </InputSuffix>
      </DefaultDataEntryTextContainer>
    );
  }
}

/**
 * Basic text field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */

DefaultDataEntryText.propTypes = {
  /** set className to input */
  className: PropTypes.string,
  /** whether input content can be removed with clear icon, pass boolean or default value of input */
  clearable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  /** clearable position style */
  clearablePosition: PropTypes.string,
  /** disabled state of the input */
  disabled: PropTypes.bool,
  /** error status, if has error return pass boolean value to flag input or pass object like {message: "error message"} with message text */
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /** input custom style */
  inputStyle: PropTypes.object,
  /** label custom style */
  labelStyle: PropTypes.object,
  /** callback on input blur */
  onBlur: PropTypes.func,
  /** callback when value changes */
  onChange: PropTypes.func,
  /** callback when enter key is pressed */
  onPressEnter: PropTypes.func,
  /** callback when key is pressed */
  onKeyPress: PropTypes.func,
  /** callback on key up */
  onKeyUp: PropTypes.func,
  /** prefix icon inside input */
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** set readonly prop */
  readOnly: PropTypes.bool,
  /** suffix icon inside input */
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** input content value */
  value: PropTypes.string,
  /** input description */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** info suffix, after input */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** limit input length */
  maxLength: PropTypes.number,
  /** show counter if maxLength is setted */
  showCounter: PropTypes.bool
};

DefaultDataEntryText.defaultProps = {
  className: "",
  clearable: null,
  clearablePosition: null,
  disabled: false,
  error: null,
  inputStyle: null,
  labelStyle: null,
  onBlur: null,
  onChange: null,
  onPressEnter: null,
  onKeyPress: null,
  onKeyUp: null,
  prefix: null,
  readOnly: false,
  suffix: null,
  value: "",
  description: null,
  helpText: null,
  maxLength: null,
  showCounter: false
};

export { DefaultDataEntryCSS, InputSettingsCSS };
export default DefaultDataEntryText;
