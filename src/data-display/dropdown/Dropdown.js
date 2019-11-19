import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { DropdownWrapper, DropdownDispatcher, DropdownContent } from "./styles";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.contentRef = createRef();
    this.dispatcherRef = createRef();
    this.wrapperRef = createRef();
    this.state = {
      visible: props.visible !== null ? props.visible : false,
      controlled: props.visible !== null
    };
  }

  componentDidUpdate() {
    const { controlled } = this.state;
    const { visible } = this.props;
    if (controlled && visible) {
      document.addEventListener("click", this.handleClose);
      document.addEventListener("contextmenu", this.handleClose);
    }
  }

  /**
   * Check if event type is present in trigger properties
   * in order to determine whether or not the activation
   * should occur.
   *
   * @param {DOMEvent} e DOM Event for interacting with dispatcher
   */
  handleActivation = e => {
    e && e.preventDefault();
    const { visible, onVisibleChange } = this.props;
    const { visible: stateVisible, controlled } = this.state;

    if (this.isValidTrigger(e.type) || this.isClickOnContextMenu(e)) {
      // if it's controlled, just pass the opposite visible to
      // controller component via onVisibleChange. If not,
      // update state.
      if (controlled && typeof onVisibleChange === "function") {
        onVisibleChange(!visible);
      } else {
        this.setState({
          visible: !stateVisible
        });
      }

      // Then if we're showing the dropdown content, we need to add
      // events to close the dropdown
      const clickEvents = ["click", "contextmenu"];
      if (
        clickEvents.includes(e.type) &&
        ((controlled && !visible === true) || !stateVisible === true)
      ) {
        document.addEventListener("click", this.handleClose);
        document.addEventListener("contextmenu", this.handleClose);
      }
    }
  };

  /**
   * Theres a corner case of user clicking with the left mouse button
   * on a dispatcher that has the trigger for only contextmenu. In those
   * cases, if the Dropdown overlay is visible it needs to dispatch
   * the activation. This function validates this interaction
   *
   * @param {DOMEvent} e DOMEvent dispatched by interacting with the disptcher
   * @return {Boolean} Whether the event is a left click on an open dropdown
   * with contextmenu as trigger
   */
  isClickOnContextMenu = e => {
    const { trigger, visible } = this.props;
    const { visible: stateVisible, controlled } = this.state;
    const validTrigger =
      (typeof trigger === "string" && trigger === "contextmenu") ||
      trigger.includes("contextmenu");
    if (validTrigger && e.type === "click") {
      return controlled ? visible : stateVisible;
    }
    return false;
  };

  /**
   *
   *
   * @param {DOMEvent} e DOMEvent
   */
  handleClose = e => {
    e && e.preventDefault();
    const { visible, onVisibleChange } = this.props;
    const { visible: stateVisible, controlled } = this.state;
    const dispatcher = this.dispatcherRef.current;
    const wrapper = this.wrapperRef.current;

    const currentContainer = e.target.closest(".dropdown-main-container");
    if (
      currentContainer === wrapper &&
      (e.target === dispatcher || e.target.closest(".dropdown-dispatcher"))
    ) {
      return;
    }
    if (!e.target.closest(".dropdown-content")) {
      document.removeEventListener("click", this.handleClose);
      document.removeEventListener("contextmenu", this.handleClose);

      if (controlled && typeof onVisibleChange === "function") {
        onVisibleChange(!visible);
      } else {
        this.setState({ visible: !stateVisible });
      }
    }
  };

  /**
   * When trigger is hover, check if mouse is leaving to the dropdown
   * content or not. It it's moving to the dropdown content, don't do
   * anything. Else, close modal.
   *
   * @param {DOMEvent} e DOMEvent
   */
  handleMouseLeave = e => {
    const { visible, onVisibleChange } = this.props;
    const { visible: stateVisible, controlled } = this.state;
    if (this.isValidTrigger(e.type)) {
      const contentElement = this.contentRef.current;
      const dispatcher = this.dispatcherRef.current;
      const toElement = e.toElement || e.nativeEvent.toElement;
      if (toElement !== dispatcher && toElement !== contentElement) {
        if (controlled && visible && typeof onVisibleChange === "function") {
          onVisibleChange(!visible);
        } else if (stateVisible) {
          this.setState({ visible: !stateVisible });
        }
      }
    }
  };

  /**
   * Check if the event type that dispatched an action within the
   * component is a valid trigger.
   *
   * @param {String} evType DOMEvent event type string
   * @return {Boolean} Whether or not the event type is a valid trigger
   */
  isValidTrigger = evType => {
    const { trigger } = this.props;
    const triggerArray =
      typeof trigger === "string" ? trigger.split(" ") : trigger;
    const eventType =
      evType === "mouseenter" || evType === "mouseleave" ? "hover" : evType;
    return triggerArray.includes(eventType);
  };

  render() {
    const {
      children,
      overlay,
      visible,
      overlayClassName,
      overlayStyle
    } = this.props;
    const { visible: stateVisible, controlled } = this.state;
    const dropdownVisible = controlled ? visible : stateVisible;
    const ContentClasses = cx("dropdown-content", overlayClassName);

    return (
      <DropdownWrapper
        ref={this.wrapperRef}
        className="dropdown-main-container"
      >
        <DropdownDispatcher
          ref={this.dispatcherRef}
          onClick={this.handleActivation}
          onMouseEnter={this.handleActivation}
          onMouseLeave={this.handleMouseLeave}
          onContextMenu={this.handleActivation}
          className="dropdown-dispatcher"
        >
          {children}
        </DropdownDispatcher>
        <DropdownContent
          ref={this.contentRef}
          visible={dropdownVisible}
          className={ContentClasses}
          style={overlayStyle}
          onMouseLeave={this.handleMouseLeave}
        >
          {overlay}
        </DropdownContent>
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
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
  disabled: false,
  onVisibleChange: null,
  overlay: null,
  overlayClassName: "",
  overlayStyle: {},
  trigger: ["hover"],
  visible: null
};

export default Dropdown;
