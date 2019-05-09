import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../../helpers";

const Message = ({ ...props }) => <div />;

Message.propTypes = {
  /** content of message */
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  /** Time in miliseconds before message auto-dismiss. If it's set to 0 message don't dismiss automatically. */
  duration: PropTypes.number,
  /** custom icon */
  icon: PropTypes.node,
  /** callback when message is closed */
  onClose: PropTypes.func
};

Message.defaultProps = {
  duration: 1500,
  icon: null,
  onClose: noop
};

export default Message;
