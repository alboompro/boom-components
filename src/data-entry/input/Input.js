import React from "react";
import PropTypes from "prop-types";
import { connect } from "formik";
import { DefaultDataEntryText } from "../../shared/data-entry-text";

import { InputDefault } from "./styles";

export class DefaultInput extends DefaultDataEntryText {
  getDataEntryType = inputProps => {
    return <InputDefault {...inputProps} />;
  };
}

/**
 * Basic text field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */

DefaultInput.propTypes = {
  ...DefaultDataEntryText.propTypes,
  /** HTML type of input */
  type: PropTypes.oneOf([
    "email",
    "hidden",
    "password",
    "search",
    "tel",
    "text",
    "url",
    "week"
  ])
};

DefaultInput.defaultProps = {
  ...DefaultDataEntryText.defaultProps,
  type: "text"
};

export default connect(DefaultInput);
