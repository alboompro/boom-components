import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../../helpers";

const Notification = ({ ...props }) => <div />;

Notification.propTypes = {
  /** custom close button */
  closeButton: PropTypes.node,
  /** content of notification box */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** Time in miliseconds before notificaiton is closed. If it's set to 0 notification will never be closed automatically. */
  duration: PropTypes.number,
  /** icon in the left of notification box */
  icon: PropTypes.node,
  /** unique identifier to notification */
  key: PropTypes.string.isRequired,
  /** callback when notification is clicked */
  onClick: PropTypes.func,
  /** callback when notification is opened or closed */
  onVisibleChange: PropTypes.func,
  /** placement of notification box */
  placement: PropTypes.oneOf([
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]),
  /** title of notification box */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Notification.defaultProps = {
  closeButton: null,
  duration: 5000,
  icon: null,
  onClick: noop,
  onVisibleChange: noop,
  placement: "topRight"
};

export default Notification;
