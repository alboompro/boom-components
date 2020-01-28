import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Icon from "../../general/icon";

import Notice from "./Notice";

let count = 0;
class Notification extends PureComponent {
  state = {
    notices: []
  };

  add = notice => {
    const { notices } = this.state;
    // eslint-disable-next-line no-plusplus
    const key = notice.key || `idx-${++count}`;
    this.setState({ notices: [...notices, { ...notice, key }] });
  };

  remove = key => {
    const { notices } = this.state;
    const updateNotices = notices.filter(notice => notice.key !== key);
    this.setState({ notices: updateNotices });
  };

  render() {
    const { notices } = this.state;
    const noticeNodes = notices.map(notice => {
      const onClose = () => {
        this.remove(notice.key);
        if (typeof notice.onClose === "function") notice.onClose();
      };

      return <Notice {...notice} onClose={onClose} />;
    });

    return <div>{noticeNodes}</div>;
  }
}

Notification.initialize = function initializeNotification(
  properties,
  callback
) {
  const props = { ...properties };

  const div = document.createElement("div");
  div.classList.add("boom-notification");
  div.style = props.targetStyles;
  props.targetDOM.appendChild(div);

  function ref(notification) {
    div.instance = notification;
    callback(notification);
  }

  ReactDOM.render(<Notification ref={ref} />, div);
};

Notification.open = props => {
  const target = props.target || "body";
  const targetDOM = document.querySelector(target);
  if (!targetDOM) throw new Error("Target not found");

  const instance = targetDOM.querySelector(".boom-notification");

  if (!instance) {
    Notification.initialize(
      {
        targetDOM,
        targetStyles:
          props.wrapperStyle ||
          "position: fixed; z-index: 10000; top: 15px; right: 15px;"
      },
      inst => {
        inst.add(props);
      }
    );
  } else {
    instance.instance.add(props);
  }
};

Notification.success = props => {
  Notification.open({
    style: {
      backgroundColor: "#45ae70",
      color: "#fff"
    },
    iconColor: "#fff",
    icon: (
      <Icon
        kind="bold"
        group="interface-essential"
        category="form-validation"
        file="check-circle-1.svg"
        size="16"
        color="#fff"
      />
    ),
    ...props
  });
};

Notification.error = props => {
  Notification.open({
    style: {
      backgroundColor: "#e85035",
      color: "#fff"
    },
    iconColor: "#fff",
    icon: (
      <Icon
        kind="bold"
        group="interface-essential"
        category="form-validation"
        file="remove-circle.svg"
        size="16"
        color="#fff"
      />
    ),
    ...props
  });
};

Notification.info = props => {
  Notification.open({
    style: {
      backgroundColor: "#48bdd6",
      color: "#fff"
    },
    iconColor: "#fff",
    ...props
  });
};

Notification.warning = props => {
  Notification.open({
    style: {
      backgroundColor: "#f1b503",
      color: "#fff"
    },
    iconColor: "#fff",
    ...props
  });
};

Notification.defaultProps = {
  key: null,
  target: "body",
  wrapperStyle: "position: fixed; z-index: 10000; top: 15px; right: 15px;"
};

Notification.propTypes = {
  /** unique identifier to notification */
  key: PropTypes.string,
  /** target when notification is render  */
  target: PropTypes.string,
  /** style to wrapper when notification */
  wrapperStyle: PropTypes.string
};

export default Notification;
