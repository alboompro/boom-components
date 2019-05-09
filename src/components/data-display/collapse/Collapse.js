import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../../helpers";

const Collapse = ({ ...props }) => <div />;

Collapse.propTypes = {
  /** whether collapse will act like an accordion */
  accordion: PropTypes.bool,
  /** key of active panel */
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  /** add border around each panel */
  bordered: PropTypes.bool,
  /** initial state of active panel */
  defaultActive: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  /** callback when state changes */
  onChange: PropTypes.func
};

Collapse.defaultProps = {
  accordion: false,
  bordered: true,
  onChange: noop
};

export default Collapse;
