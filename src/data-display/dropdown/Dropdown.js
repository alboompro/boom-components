import React, { Component } from "react";
import PropTypes from "prop-types";
import Portal from "../../shared/portal";

import { DropdownContainer, DropdownContent, DropdownWrapper } from "./styles";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dispatcherRef = null;
    const popupVisible = props.visible !== null ? props.visible : false;
    this.state = {
      visible: popupVisible,
      placement: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== null) {
      this.setState({ visible: nextProps.visible });
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.state;
    if (!prevProps.visible && visible) {
      this.addHideEvents();
    } else if (prevProps.visible && !visible) {
      this.removeHideEvents();
    }
  }

  addHideEvents = () => {
    document.addEventListener("click", this.clickOnDocumentHandler);
  };

  clickToHide = e => {
    const { visible } = this.state;
    const dispatcher = this.dispatcherRef.current;
    const content = this.containerRef ? this.containerRef.current : null;
    return (
      visible &&
      (e.target !== dispatcher && !dispatcher.contains(e.target)) &&
      (e.target !== content && !content.contains(e.target))
    );
  };

  clickOnDocumentHandler = e => {
    const v = this.clickToHide(e);
    if (this.clickToHide(e)) {
      e && e.preventDefault();
      this.update(false);
    }
  };

  handleClick = e => {
    const { disabled } = this.props;
    if (!disabled && this.validTrigger(e.type)) {
      e && e.preventDefault();
      const { visible } = this.state;
      const nextVisible = !visible;
      if (nextVisible) this.placeInPosition(e);
      this.update(nextVisible);
    }
  };

  handleMouseEnter = e => {
    const { disabled } = this.props;
    if (!disabled && this.validTrigger(e.type)) {
      e && e.preventDefault();
      const { visible } = this.state;
      const nextVisible = !visible;
      if (nextVisible) {
        this.placeInPosition(e);
        this.update(nextVisible);
      }
    }
  };

  handleMouseLeave = e => {
    const { visible } = this.state;
    if (visible && this.validTrigger(e.type)) {
      e && e.preventDefault();
      const container = this.containerRef.current;
      const { toElement } = e.nativeEvent;
      if (toElement && !container.contains(toElement)) {
        this.update(false);
      }
    }
  };

  handleDropdownMouseLeave = e => {
    const { visible } = this.state;
    if (visible && this.validTrigger(e.type)) {
      e && e.preventDefault();
      const dispatcher = this.dispatcherRef.current;
      const { toElement } = e.nativeEvent;
      if (
        toElement &&
        toElement !== dispatcher &&
        !dispatcher.contains(toElement)
      ) {
        this.update(false);
      }
    }
  };

  /**
   * calculate the position in order to correctly
   * place the dropdown content in relation to the
   * dispatcher
   *
   * @memberof Dropdown
   */
  placeInPosition = e => {
    const { align } = this.props;
    const {
      right,
      left,
      width,
      bottom
    } = e.currentTarget.getBoundingClientRect();
    const placement = {
      top: window.scrollY + bottom
    };
    switch (align) {
      case "right":
        placement.left = right;
        placement.transform = "translateX(-100%)";
        break;
      case "center":
        placement.left = left + width / 2;
        placement.transform = "translateX(-50%)";
        break;
      default:
        placement.left = left;
    }
    this.setState({ placement });
  };

  removeHideEvents = () => {
    document.removeEventListener("click", this.clickOnDocumentHandler);
  };

  setContainerRef = el => {
    this.containerRef = { current: el };
  };

  setDispatcherRef = el => {
    this.dispatcherRef = { current: el };
  };

  update = nextVisible => {
    const { onVisibleChange } = this.props;
    if (typeof onVisibleChange === "function") {
      onVisibleChange(nextVisible);
    } else {
      this.setState({ visible: nextVisible });
    }
  };

  validTrigger = evType => {
    const { trigger } = this.props;
    const triggerArray =
      typeof trigger === "string" ? trigger.split(" ") : trigger;
    const eventType =
      evType === "mouseenter" || evType === "mouseleave" ? "hover" : evType;
    return triggerArray.includes(eventType);
  };

  render() {
    const { overlay, children, align, overlayStyle } = this.props;
    const { visible, placement } = this.state;

    return (
      <DropdownWrapper>
        <div
          className="dispatcher"
          onClick={this.handleClick}
          onContextMenu={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          ref={this.setDispatcherRef}
        >
          {children}
        </div>
        {visible && (
          <Portal>
            <DropdownContainer>
              <div
                className="dropdown-placement"
                onMouseLeave={this.handleDropdownMouseLeave}
                ref={this.setContainerRef}
                style={placement}
              >
                <DropdownContent align={align} style={overlayStyle}>
                  {overlay}
                </DropdownContent>
              </div>
            </DropdownContainer>
          </Portal>
        )}
      </DropdownWrapper>
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
  overlayStyle: {},
  trigger: "click",
  visible: null
};

export default Dropdown;
