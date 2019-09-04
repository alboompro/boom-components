import React from "react";
import PropTypes from "prop-types";
import Loader from "../../shared/loader";

import {
  DefaultBtn,
  Icon,
  LoadingFeedback,
  ButtonContent,
  ButtonChildren
} from "./styles";

import { noop } from "../../helpers";

/**
 * Component to trigger an operation.
 *
 * @param {*} { children, textStyle, icon, iconStyle, htmlType, type, ...props }
 * @returns {Component}
 */
const Button = ({
  children,
  textStyle,
  icon,
  iconStyle,
  htmlType,
  type,
  loading,
  loadingColor,
  loadingSize,
  disabled,
  className,
  ...props
}) => (
  <DefaultBtn
    type={htmlType}
    colorType={type}
    disabled={loading || disabled}
    loadingSize={loadingSize}
    className={`${className} ${loading ? "loading" : ""}`}
    {...props}
  >
    <ButtonContent>
      {loading && (
        <LoadingFeedback>
          <span>
            <Loader loadingSize={loadingSize} loadingColor={loadingColor} />
          </span>
        </LoadingFeedback>
      )}
      <ButtonChildren style={textStyle}>
        {icon && <Icon style={iconStyle}>{icon}</Icon>}
        {children}
      </ButtonChildren>
    </ButtonContent>
  </DefaultBtn>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** set the class of button */
  className: PropTypes.string,
  /** disabled state of the button */
  disabled: PropTypes.bool,
  /** redirect url of link button */
  href: PropTypes.string,
  /** HTML type of button */
  htmlType: PropTypes.oneOf(["button", "reset", "submit"]),
  /** set the icon of button */
  icon: PropTypes.string,
  /** icon style */
  iconStyle: PropTypes.object,
  /** set the loading status of button */
  loading: PropTypes.bool,
  /** loading icon size */
  loadingSize: PropTypes.number,
  /** loading icon color */
  loadingColor: PropTypes.string,
  /** set the handler of click event */
  onClick: PropTypes.func,
  /** make background transparent and invert text and border colors */
  outlined: PropTypes.bool,
  /** make button circular */
  rounded: PropTypes.bool,
  /** size of the button */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /** fit button width to its parent width */
  stretched: PropTypes.bool,
  /** set the style of button */
  style: PropTypes.object,
  /** same as target attr of a but works only when href is specified */
  target: PropTypes.string,
  /** set the pattern of button */
  type: PropTypes.oneOf(["main", "primary"])
};

Button.defaultProps = {
  className: null,
  disabled: false,
  htmlType: "button",
  href: null,
  icon: null,
  iconStyle: {},
  loading: false,
  loadingColor: "#fff",
  loadingSize: 18,
  outlined: false,
  onClick: noop,
  rounded: false,
  size: "default",
  stretched: false,
  style: {},
  target: null,
  type: "main"
};

export default Button;
