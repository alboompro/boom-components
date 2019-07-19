import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import shallowEqual from "shallowequal";
import PanelContent from "./PanelContent";
import Icon from "../../general/icon";
import { IconWrapper } from "./styles";

class Panel extends Component {
  /**
   * Only update if nextProps changed.
   *
   * @param {Object} nextProps
   * @returns {Boolean}
   */
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  handleItemClick = () => {
    const { onItemClick, panelKey, expandOnlyInIcon } = this.props;
    if (expandOnlyInIcon) return;
    if (typeof onItemClick === "function") {
      onItemClick(panelKey);
    }
  };

  handleIconClick = () => {
    const { onItemClick, panelKey, expandOnlyInIcon } = this.props;
    if (!expandOnlyInIcon) return;
    if (typeof onItemClick === "function") {
      onItemClick(panelKey);
    }
  };

  handleKeyPress = e => {
    if (e.key === "Enter" || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  };

  renderExpandIcon = () => {
    const { expandIcon, expandIconPosition, isActive, disabled } = this.props;
    const IconContainerClasses = cx(
      "expand-icon",
      `expand-icon-${expandIconPosition}`
    );
    const icon =
      expandIcon && typeof expandIcon === "function" ? (
        expandIcon(isActive, disabled)
      ) : (
        <IconWrapper open={isActive}>
          <Icon
            kind="bold"
            group="arrows-diagrams"
            category="arrows"
            file="arrow-button-right.svg"
            size="16"
            color={!disabled ? "#666666" : "#e3e3e3"}
          />
        </IconWrapper>
      );
    return (
      <div className={IconContainerClasses} onClick={this.handleIconClick}>
        {icon}
      </div>
    );
  };

  render() {
    const {
      header,
      children,
      disabled,
      isActive,
      showArrow,
      accordion,
      forceRender
    } = this.props;

    const PanelClasses = cx("panel", {
      "panel-active": isActive,
      "panel-disabled": disabled
    });

    return (
      <div className={PanelClasses}>
        <div
          className="header"
          onClick={this.handleItemClick}
          onKeyPress={this.handleKeyPress}
          aria-expanded={isActive}
          role={accordion ? "tab" : "button"}
          tabIndex={disabled ? -1 : 0}
        >
          {showArrow && this.renderExpandIcon()}
          {header}
        </div>
        <div className="animation-wrapper">
          <PanelContent
            isActive={isActive}
            forceRender={forceRender}
            role={accordion ? "tabpanel" : null}
          >
            {children}
          </PanelContent>
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  /** if true, panel cannot be opened or closed */
  disabled: PropTypes.bool,
  /** title of panel */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** unique identifier */
  key: PropTypes.string,
  /** whether show arrow icon */
  showArrow: PropTypes.bool
};

Panel.defaultProps = {
  disabled: false,
  header: null,
  showArrow: true,
  key: null
};

export default Panel;
