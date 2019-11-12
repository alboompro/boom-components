/* eslint-disable react/no-string-refs */
/* eslint-disable global-require */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../../general/icon";
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  CloseIcon
} from "./styles";

const reactVersion = parseInt(React.version.split(".")[0]);
let Portal;
if (reactVersion >= 16) {
  const ReactDOM = require("react-dom");
  Portal = ({ children, node }) =>
    ReactDOM.createPortal(children, document.body);
} else {
  // eslint-disable-next-line prefer-destructuring
  Portal = require("react-portal").Portal;
}

class Modal extends Component {
  closeModal = e => {
    const { onClose, backdropClosable } = this.props;
    const { backdrop, closeButton } = this.refs;
    document.body.style.overflow = null;

    if (
      backdropClosable &&
      (e.target === (backdrop.refs ? backdrop.refs.backdrop : backdrop) ||
        e.target ===
          (closeButton.refs ? closeButton.refs.closeButton : closeButton))
    ) {
      onClose();
    }
  };

  modalHandler = () => {
    const {
      backdrop,
      backdropStyle,
      background,
      bodyStyle,
      children,
      closeButton,
      floatingStyle,
      footer,
      headerStyle,
      height,
      modalStyle,
      rounded,
      title,
      width,
      zIndex
    } = this.props;

    document.body.style.overflow = "hidden";

    return (
      <ModalBackdrop
        backdrop={backdrop}
        backdropStyle={backdropStyle}
        zIndex={zIndex}
        floatingStyle={floatingStyle}
        onClick={this.closeModal}
        ref="backdrop"
        innerRef="backdrop"
      >
        <ModalContainer
          rounded={rounded}
          background={background}
          width={width}
          height={height}
          floatingStyle={floatingStyle}
          styles={modalStyle}
        >
          <ModalHeader style={headerStyle}>
            {title && <ModalTitle>{title}</ModalTitle>}
            {closeButton && (
              <CloseIcon
                onClick={this.closeModal}
                ref="closeButton"
                innerRef="closeButton"
              >
                <Icon
                  kind="bold"
                  group="interface-essential"
                  category="form-validation"
                  file="close.svg"
                  size="16"
                  color="#5F5F5F"
                />
              </CloseIcon>
            )}
          </ModalHeader>
          <ModalBody bodyStyle={bodyStyle}>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContainer>
      </ModalBackdrop>
    );
  };

  render() {
    const { visible } = this.props;

    return visible && <Portal>{this.modalHandler()}</Portal>;
  }
}

Modal.propTypes = {
  /** callback when modal is completely closed */
  backdrop: PropTypes.bool,
  /** whether to click on backdrop should close drawer */
  backdropClosable: PropTypes.bool,
  /** style of backdrop */
  backdropStyle: PropTypes.object,
  /** modal background color (can be set to transparent) */
  background: PropTypes.string,
  /** style of modal body content */
  bodyStyle: PropTypes.object,
  /** whether a close button is visible on top right corner of modal */
  closeButton: PropTypes.bool,
  /** modal content */
  children: PropTypes.node.isRequired,
  /** style of floating layer which is used for adjusting its position */
  floatingStyle: PropTypes.object,
  /** footer content */
  footer: PropTypes.node,
  /** custom header style */
  headerStyle: PropTypes.object,
  /** height of modal */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** main containter modal style */
  modalStyle: PropTypes.object,
  /** return the mount node for modal */
  rounded: PropTypes.bool,
  /** modal title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether modal is visible */
  visible: PropTypes.bool,
  /** width of modal */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of modal */
  zIndex: PropTypes.number
};

Modal.defaultProps = {
  backdrop: true,
  backdropClosable: true,
  backdropStyle: {},
  background: "white",
  bodyStyle: {},
  closeButton: true,
  floatingStyle: {},
  footer: null,
  headerStyle: {},
  height: "auto",
  modalStyle: {},
  rounded: true,
  title: null,
  visible: false,
  zIndex: 1000,
  width: 520
};

export default Modal;
