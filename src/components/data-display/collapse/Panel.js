import React from "react";
import PropTypes from "prop-types";

const Panel = ({ ...props }) => <div />;

Panel.propTypes = {
  /** if true, panel cannot be opened or closed */
  disabled: PropTypes.bool,
  /** title of panel */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** unique identifier */
  key: PropTypes.string.isRequired,
  /** whether show arrow icon */
  showArrow: PropTypes.bool
};

Panel.defaultProps = {
  disabled: false,
  header: null,
  showArrow: true
};

export default Panel;
