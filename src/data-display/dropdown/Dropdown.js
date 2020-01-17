/* eslint-disable global-require */

import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import PositionProvider from "./PositionProvider";
import { Backdrop } from "./styles";

const reactVersion = parseInt(React.version.split(".")[0]);

let Portal;
if (reactVersion >= 16) {
  const ReactDOM = require("react-dom");
  Portal = ({ children }) => ReactDOM.createPortal(children, document.body);
} else {
  // eslint-disable-next-line prefer-destructuring
  Portal = require("react-portal").Portal;
}

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dispatcher =
      typeof React.createRef === "function" ? React.createRef() : null;
    this.state = {
      visible: props.visible !== null ? props.visible : false,
      controlled: props.visible !== null
    };
  }

  /**
   * Check if the event type that dispatched an action within the
   * component is a valid trigger.
   *
   * @param {String} evType DOMEvent event type string
   * @return {Boolean} Whether or not the event type is a valid <trigger></trigger>
   */
  isValidTrigger = evType => {
    const { trigger } = this.props;
    const triggerArray =
      typeof trigger === "string" ? trigger.split(" ") : trigger;
    const eventType =
      evType === "mouseenter" || evType === "mouseleave" ? "hover" : evType;
    return triggerArray.includes(eventType);
  };

  /**
   * Checks if the mouse is hovering the dispatcher or the dropdown
   * content.
   *
   * @param {DOMEvent} ev MouseOver Event
   * @return {Boolean} wether or not the event position is hovering the dropdown
   */
  isHoveringDropdown = ev => {
    const dispatcherRect = this.dispatcher.current.getBoundingClientRect();
    const overlayRect = document
      .querySelector(".dropdown-overlay")
      .getBoundingClientRect();
    return (
      (ev.x >= dispatcherRect.x &&
        ev.x <= dispatcherRect.right &&
        (ev.y >= dispatcherRect.y && ev.y <= dispatcherRect.bottom)) ||
      (ev.x >= overlayRect.x &&
        ev.x <= overlayRect.right &&
        (ev.y >= overlayRect.y - 8 && ev.y <= overlayRect.bottom))
    );
  };

  handleClick = e => {
    e && e.preventDefault();
    const { disabled, onVisibleChange } = this.props;
    const { controlled, visible: stateVisible } = this.state;
    if (!disabled && this.isValidTrigger(e.type)) {
      if (controlled && typeof onVisibleChange === "function") {
        onVisibleChange(!stateVisible);
      } else {
        this.setState({ visible: true });
      }
    }
  };

  handleMouseEnter = e => {
    e && e.preventDefault();
    const { disabled } = this.props;
    if (!disabled && this.isValidTrigger(e.type)) {
      const { controlled } = this.state;
      const { visible, onVisibleChange } = this.props;
      if (controlled && typeof onVisibleChange === "function") {
        onVisibleChange(!visible);
      } else {
        this.setState({ visible: true });
      }
    }
  };

  handleMouseMove = e => {
    if (
      this.isValidTrigger("mouseleave") &&
      !this.isHoveringDropdown(e.nativeEvent)
    ) {
      const { controlled } = this.state;
      const { onVisibleChange, visible } = this.props;
      if (controlled && typeof onVisibleChange === "function") {
        onVisibleChange(!visible);
      } else {
        this.setState({ visible: false });
      }
    }
  };

  handleClose = e => {
    if (e.target.closest(".dropdown-overlay")) return;
    const { controlled } = this.state;
    const { onVisibleChange, visible } = this.props;
    if (controlled && typeof onVisibleChange === "function") {
      onVisibleChange(!visible);
    } else {
      this.setState({ visible: false });
    }
  };

  setDispatcherRef = element => {
    this.dispatcher = { current: element };
  };

  render() {
    const {
      children,
      overlay,
      align,
      overlayClassName,
      overlayStyle,
      visible
    } = this.props;
    const { visible: stateVisible, controlled } = this.state;
    const dropdownVisible = controlled ? visible : stateVisible;

    const OverlayClasses = cx("dropdown-overlay", overlayClassName);
    const refCondition =
      typeof React.createRef === "function"
        ? { ref: this.dispatcher }
        : { ref: this.setDispatcherRef };

    return (
      <div>
        <div
          style={{ position: "absolute", width: "100%", height: "100%" }}
          onClick={this.handleClick}
          onContextMenu={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          {...refCondition}
        >
          {children}
        </div>
        {dropdownVisible && (
          <Portal>
            <Backdrop
              onClick={this.handleClose}
              onMouseMove={this.handleMouseMove}
              onContextMenu={this.handleClose}
            >
              <PositionProvider
                className={OverlayClasses}
                style={overlayStyle}
                align={align}
                origin={this.dispatcher}
              >
                {overlay}
              </PositionProvider>
            </Backdrop>
          </Portal>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  /** Alignment of dropdown: left, center or right */
  align: PropTypes.oneOf(["left", "center", "right"]),
  /** Whether the dropdown menu is disabled  */
  disabled: PropTypes.bool,
  /** The dropdown menu */
  overlay: PropTypes.node,
  /** Class name of the dropdown root element */
  overlayClassName: PropTypes.string,
  /** Style of the dropdown root element */
  overlayStyle: PropTypes.object,
  /** Called when the visible state is changed. */
  onVisibleChange: PropTypes.func,
  /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens. */
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      (propValue, key, componentName, _location, propFullName) => {
        const validTriggers = ["hover", "click", "contextmenu"];
        if (!validTriggers.includes(propValue[key])) {
          return new Error(
            `Invalid prop '${propFullName}' supplied to '${componentName}'. Validation Failed.`
          );
        }
      }
    )
  ]),
  /** Whether the dropdown menu is currently visible */
  visible: PropTypes.bool
};

Dropdown.defaultProps = {
  align: "left",
  disabled: false,
  onVisibleChange: null,
  overlay: null,
  overlayClassName: "",
  overlayStyle: {},
  trigger: "click",
  visible: null
};

export default Dropdown;
