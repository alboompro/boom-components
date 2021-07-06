import React from "react";
import { connect } from "formik";
import { DefaultDataEntryText } from "../../shared/data-entry-text";

import { Textarea } from "./styles";

export class DefaultTextArea extends DefaultDataEntryText {
  getDataEntryType = inputProps => {
    return <Textarea {...inputProps} />;
  };
}

/**
 * Basic text field to get user input.
 *
 * @param {*} { size, ...props }
 * @returns {Component}
 */
DefaultTextArea.propTypes = { ...DefaultDataEntryText.propTypes };

DefaultTextArea.defaultProps = { ...DefaultDataEntryText.defaultProps };

export default connect(DefaultTextArea);
