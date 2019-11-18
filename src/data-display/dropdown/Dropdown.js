import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { DropdownWrapper, DropdownDispatcher, DropdownContent } from "./styles";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = createRef();
    this.triggerRef = createRef();
    this.contentRef = createRef();
    this.state = { visible: props.visible };
  }

  componentDidMount() {
    const { trigger } = this.props;
    const element = this.triggerRef.current;
    if (element) {
      trigger.forEach(event => {
        if (event === "hover") {
          element.addEventListener("mouseenter", this.handleVisibilityChange);
          element.addEventListener("mouseleave", this.handleVisibilityChange);
        } else {
          element.addEventListener(event, this.handleVisibilityChange);
        }
      });
    }
  }

  componentWillUnmount() {
    const { trigger } = this.props;
    const element = this.triggerRef.current;
    if (element) {
      trigger.forEach(event => {
        if (event === "hover") {
          element.removeEventListener(
            "mouseenter",
            this.handleVisibilityChange
          );
          element.removeEventListener(
            "mouseleave",
            this.handleVisibilityChange
          );
        } else {
          element.removeEventListener(event, this.handleVisibilityChange);
        }
      });
    }
  }

  handleVisibilityChange = e => {
    e.preventDefault();
    const { disabled } = this.props;
    if (disabled) return;
    const hoverEvents = ["mouseenter", "mouseleave"];
    hoverEvents.includes(e.type) ? this.handleHover(e) : this.handleClick(e);
  };

  handleHover = e => {
    const { visible, onVisibleChange } = this.state;
    if (e.type === "mouseenter" && !visible) {
      this.setState({ visible: true }, () => {
        if (onVisibleChange && typeof onVisibleChange === "function") {
          onVisibleChange(true);
        }
      });
    } else if (e.type === "mouseleave") {
      const content = this.contentRef.current;

      // leaving to enter the dropdown content
      if (e.toElement === content || e.toElement.closest(".dropdown-content")) {
        content.addEventListener("mouseleave", this.handleMouseLeave);
      } else {
        this.setState({ visible: false }, () => {
          if (onVisibleChange && typeof onVisibleChange === "function") {
            onVisibleChange(false);
          }
        });
      }
    }
  };

  handleMouseLeave = e => {
    const { onVisibleChange } = this.props;
    const dispatcher = this.triggerRef.current;
    const content = this.contentRef.current;
    if (e.toElement !== dispatcher) {
      this.setState({ visible: false }, () => {
        if (onVisibleChange && typeof onVisibleChange === "function") {
          onVisibleChange(false);
        }
      });
      content.removeEventListener("mouseleave", this.handleMouseLeave);
    }
  };

  handleClick = e => {
    const { visible } = this.state;
    const { onVisibleChange } = this.props;
    const nextVisible = !visible;
    if (nextVisible) {
      document.addEventListener("click", this.handleCloseDropdown.bind(this));
      document.addEventListener(
        "contextmenu",
        this.handleCloseDropdown.bind(this)
      );
    }
    this.setState({ visible: nextVisible }, () => {
      if (onVisibleChange && typeof onVisibleChange === "function") {
        onVisibleChange(nextVisible);
      }
    });
  };

  handleCloseDropdown = e => {
    const { onVisibleChange } = this.props;
    const dispatcher = this.triggerRef.current;
    const currentContainer = e.target.closest(".dropdown-main-container");
    if (
      currentContainer === this.wrapperRef.current &&
      (e.target === dispatcher || e.target.closest(".dropdown-dispatcher"))
    ) {
      return;
    }
    if (!e.target.closest(".dropdown-content")) {
      this.setState({ visible: false }, () => {
        if (onVisibleChange && typeof onVisibleChange === "function") {
          onVisibleChange(false);
        }
      });
      document.removeEventListener("click", this.handleCloseDropdown);
      document.removeEventListener("contextmenu", this.handleCloseDropdown);
    }
  };

  render() {
    const { visible } = this.state;
    const { children, overlay, overlayClassName, overlayStyle } = this.props;
    const ContentClasses = cx("dropdown-content", overlayClassName);

    return (
      <DropdownWrapper
        className="dropdown-main-container"
        ref={this.wrapperRef}
      >
        <DropdownDispatcher
          className="dropdown-dispatcher"
          ref={this.triggerRef}
        >
          {children}
        </DropdownDispatcher>
        <DropdownContent
          visible={visible}
          className={ContentClasses}
          style={overlayStyle}
          ref={this.contentRef}
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
  trigger: PropTypes.arrayOf(
    (propValue, key, componentName, _location, propFullName) => {
      const validTriggers = ["hover", "click", "contextmenu"];
      if (!validTriggers.includes(propValue[key])) {
        return new Error(
          `Invalid prop '${propFullName}' supplied to '${componentName}'. Validation Failed.`
        );
      }
    }
  ),
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
  visible: false
};

export default Dropdown;
