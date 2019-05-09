import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";

const AutoComplete = ({ ...props }) => <div />;

AutoComplete.propTypes = {
  /** whether activate first option by default */
  activateFirstOption: PropTypes.bool,
  /** whether input content can be removed with clear icon */
  clearable: PropTypes.bool,
  /** data source for autocomplete */
  dataSource: PropTypes.arrayOf(PropTypes.string),
  /** initial open state of dropdown */
  defaultOpen: PropTypes.bool,
  /** initial selected option */
  defaultValue: PropTypes.string,
  /** disabled state of the input */
  disabled: PropTypes.string,
  /** fulfill input with selected item when using keyboard */
  fulfill: PropTypes.bool,
  /** callback when dropdown open or close */
  onOpenStateChange: PropTypes.func,
  /** callback when searching items */
  onSearch: PropTypes.func,
  /** callback when an option is selected */
  onSelect: PropTypes.func,
  /** open state of dropdown */
  open: PropTypes.bool,
  /** placeholder of input */
  placeholder: PropTypes.string,
  /** selected option */
  value: PropTypes.string
};

AutoComplete.defaultProps = {
  activateFirstOption: true,
  dataSource: [],
  defaultOpen: false,
  defaultValue: null,
  clearable: false,
  disabled: false,
  fulfill: false,
  onOpenStateChange: noop,
  onSearch: noop,
  onSelect: noop,
  open: false,
  placeholder: "",
  value: null
};

export default AutoComplete;
