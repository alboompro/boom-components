import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Icon from "../../general/icon";
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  CloseIcon,
} from "./styles";

class Modal extends Component {
  constructor() {
    super();
    this.backdrop = React.createRef();
    this.closeButton = React.createRef();
  }

  closeModal = e => {
    const { onClose, backdropClosable } = this.props;
    if (
      backdropClosable &&
      (e.target === this.backdrop.current ||
        e.target === this.closeButton.current)
    ) {
      onClose();
    }
  };

  render() {
    const {
      backdrop,
      backdropStyle,
      bodyStyle,
      background,
      closeButton,
      children,
      floatingStyle,
      footer,
      rounded,
      title,
      zIndex,
      width,
      visible
    } = this.props;

    return (
      visible && [
        ReactDOM.createPortal(
          <ModalBackdrop
            backdrop={backdrop}
            backdropStyle={backdropStyle}
            zIndex={zIndex}
            floatingStyle={floatingStyle}
            onClick={this.closeModal}
            ref={this.backdrop}
          >
            <ModalContainer
              rounded={rounded}
              background={background}
              width={width}
              floatingStyle={floatingStyle}
            >
              <ModalHeader>
                {title && <ModalTitle>{title}</ModalTitle>}
                {closeButton && (
                  <CloseIcon onClick={this.closeModal} ref={this.closeButton}>
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
          </ModalBackdrop>,
          document.body
        )
      ]
    );
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
  // afterClose: noop,
  backdrop: true,
  backdropClosable: true,
  backdropStyle: {},
  background: "white",
  bodyStyle: {},
  closeButton: true,
  floatingStyle: {},
  footer: null,
  rounded: true,
  title: null,
  visible: false,
  width: 520,
  zIndex: 1000
};

export default Modal;
