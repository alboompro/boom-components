import React from "react";
import PropTypes from "prop-types";

const Spin = ({ ...props }) => <div />;

Spin.propTypes = {
  /** delay in miliseconds for loading state */
  delay: PropTypes.number,
  /** size of spin */
  size: PropTypes.oneOf(["default", "large", "small"]),
  /** spinning indicator */
  spinner: PropTypes.node.isRequired,
  /** whether spin is spinning */
  spinning: PropTypes.bool,
  /** description content when spin has children */
  text: PropTypes.string
};

Spin.defaultProps = {
  delay: 100,
  size: "default",
  spinning: true,
  text: null
};

export default Spin;
