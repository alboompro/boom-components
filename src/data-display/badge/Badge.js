import React from "react";
import PropTypes from "prop-types";

const Badge = ({ ...props }) => <div />;

Badge.propTypes = {
  /** number or icon to show in badge */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.node]).isRequired,
  /** whether to display a dot instead of count */
  dot: PropTypes.bool,
  /** offset of the badge in pixels, like [x, y] */
  offset: PropTypes.arrayOf(PropTypes.number),
  /** max count to show */
  overflowCount: PropTypes.number,
  /** whether show badge when count is zero */
  showZero: PropTypes.bool,
  /** set badge as a status dot */
  status: PropTypes.oneOf([
    "default",
    "error",
    "processing",
    "success",
    "warning"
  ]),
  /** text to show when hovering over the badge */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Badge.defaultProps = {
  dot: false,
  offset: [0, 0],
  overflowCount: 99,
  status: "default",
  showZero: false,
  title: null
};

export default Badge;
