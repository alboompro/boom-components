import React, { Fragment, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import Portal from "../../shared/portal";

import {
  Backdrop,
  DrawerStyle,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerWrapper,
  DrawerDialog
} from "./styles";

const Drawer = ({
  title,
  footer,
  closeButton,
  onClose,
  children,
  backdrop,
  visible,
  handleClose,
  ...props
}) => {
  const animationdelay = 1000;
  const [debouncedVisible, setDebouncedVisible] = useState(visible);
  const [hide, setHide] = useState(!visible);
  const timeoutRef = useRef(null);

  /* mostrar drawer não tem delay, mas para remover tem um delay (animationdelay),
   * usando o useEffect e visible
   */

  useEffect(() => {
    if (visible) {
      setDebouncedVisible(true);
      setHide(false);
      clearTimeout(timeoutRef.current);
    } else {
      setDebouncedVisible(false);
      timeoutRef.current = setTimeout(() => {
        setHide(true);
      }, animationdelay); // Adicionar prop.delay para controle de animação
    }
  }, [visible]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const backdropProps = {
    backdropClosable: props.backdropProps,
    backdrop: props.backdrop,
    backdropStyle: props.backdropStyle,
    visible: debouncedVisible
  };

  const StyleProps = {
    zIndex: props.zIndex,
    hoverable: props.hoverable,
    placement: props.placement,
    ...props
  };

  const WrapperProps = {
    width: props.width,
    height: props.height,
    visible: debouncedVisible,
    placement: props.placement,
    ...props
  };

  const renderCloseButton = () => {
    return (
      closeButton && (
        <button
          type="button"
          aria-label="close"
          style={{
            fontSize: "13.5px",
            cursor: "pointer",
            width: "20px",
            background: "none",
            borderStyle: "none"
          }}
          onClick={() => handleClose()}
        >
          X
        </button>
      )
    );
  };

  const renderBackdrop = () => {
    return props.backdropClosable ? (
      <Backdrop {...backdropProps} onClick={() => handleClose()} />
    ) : (
      <Backdrop {...backdropProps} />
    );
  };

  const renderHeader = () => {
    return (
      title &&
      closeButton && (
        <DrawerHeader>
          {title && <h4>{title}</h4>}
          {closeButton && renderCloseButton()}
        </DrawerHeader>
      )
    );
  };

  return (
    !hide && (
      <Portal>
        {
          <DrawerStyle
            {...StyleProps}
            visible={debouncedVisible}
            onClick={handleClose}
            animationdelay={animationdelay}
          >
            {renderBackdrop()}
            <DrawerWrapper {...WrapperProps}>
              <DrawerDialog>
                <DrawerContent>
                  {renderHeader()}
                  <DrawerBody>{children}</DrawerBody>
                </DrawerContent>
              </DrawerDialog>
            </DrawerWrapper>
          </DrawerStyle>
        }
      </Portal>
    )
  );
};

Drawer.propTypes = {
  /** whether to show backdrop or not (area outside of the drawer) */
  backdrop: PropTypes.bool,
  /** whether to click on backdrop should close drawer */
  backdropClosable: PropTypes.bool,
  /** style of backdrop */
  backdropStyle: PropTypes.object,
  /** style of floating layer which is used for adjusting its position */
  bodyStyle: PropTypes.object,
  /** whether a close button is visible on top right corner of drawer */
  closeButton: PropTypes.bool,
  /** whether to unmount child components on close */
  destroyOnClose: PropTypes.bool,
  /** return the mounted node for drawer */
  getContainer: PropTypes.func,
  /** height of drawer while its placement is top or bottom */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** callback when visible state changes */
  onVisibleChange: PropTypes.func,
  /** placement of drawer */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** title of drawer */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** whether drawer is visible or not */
  visible: PropTypes.bool,
  /** CHANGE THIS */
  onVisibleChange: PropTypes.func,
  /** width of drawer while its placement is right or left */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of drawer */
  zIndex: PropTypes.number
};

Drawer.defaultProps = {
  backdrop: true,
  backdropClosable: true,
  backdropStyle: {},
  bodyStyle: {},
  closeButton: true,
  destroyOnClose: false,
  getContainer: () => document.body,
  height: 310,
  onVisibleChange: noop,
  placement: "right",
  title: null,
  visible: false,
  handleClose: noop,
  width: 310,
  zIndex: 1000
};

export default Drawer;
