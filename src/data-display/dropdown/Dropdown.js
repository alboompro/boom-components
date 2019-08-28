/* eslint-disable indent */
import React, { Fragment, Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import RcDropdown from "rc-dropdown";
import cx from "classnames";
import { noop } from "../../helpers";

import { DropdownStyle } from "./styles";

class Dropdown extends Component {
  getTranstionName = () => {
    const { placement = "", transitionName } = this.props;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.indexOf("top") >= 0) {
      return "slide-down";
    }
    return "slide-up";
  };

  renderOverlay = () => {
    const { overlay } = this.props;
    let overlayNode;
    if (typeof overlay === "function") {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    overlayNode = Children.only(overlayNode);
    const overlayProps = overlayNode.props;
    const { selectable = false, focusable = true } = overlayProps;
    const fixedModeOverlay =
      typeof overlayNode.type === "string"
        ? overlay
        : cloneElement(overlayNode, {
            mode: "vertical",
            selectable,
            focusable
          });
    return fixedModeOverlay;
  };

  render() {
    const { children, trigger, disabled, prefixCls, showArrow } = this.props;
    const child = Children.only(children);
    const dropdownTrigger = cloneElement(child, {
      className: cx(child.props.className)
    });

    const triggerActions = disabled ? [] : trigger;

    let alignPoint;
    if (triggerActions && triggerActions.indexOf("contextMenu") !== -1) {
      alignPoint = true;
    }

    const prefixedCls = `${prefixCls}-dropdown`;

    return (
      <Fragment>
        <DropdownStyle showArrow={showArrow} />
        <RcDropdown
          alignPoint={alignPoint}
          {...this.props}
          transitionName={this.getTranstionName()}
          prefixCls={prefixedCls}
          trigger={triggerActions}
          overlay={() => this.renderOverlay(prefixedCls)}
        >
          {dropdownTrigger}
        </RcDropdown>
      </Fragment>
    );
  }
}

Dropdown.propTypes = {
  /** Whether or not the showing of contents inside dropdown is disabled */
  disabled: PropTypes.bool,
  /** Delay when hovering trigger element before showing dropdown contents */
  mouseEnterDelay: PropTypes.number,
  /** Delay when hovering trigger element before hidding dropdown contents */
  mouseLeaveDelay: PropTypes.number,
  /** function called when changing visibility of dropdown. Takes visibile as an argument */
  onVisibleChange: PropTypes.func,
  /** Placement of the dropdown relative to the trigger element */
  placement: PropTypes.oneOf([
    "topLeft",
    "topCenter",
    "topRight",
    "bottomLeft",
    "bottomCenter",
    "bottomRight"
  ]),
  /** Css classes for the dropdown will be prefixed with it */
  prefixCls: PropTypes.string,
  /** whether or not show an arrow when dropdown is visible */
  showArrow: PropTypes.bool,
  /** Action which triggers the display of dropdown. */
  trigger: PropTypes.oneOf(["click", "hover", "contextMenu"])
};

Dropdown.defaultProps = {
  disabled: false,
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1,
  onVisibleChange: noop,
  placement: "bottomCenter",
  prefixCls: "alb",
  showArrow: false,
  trigger: "hover"
};

export default Dropdown;
