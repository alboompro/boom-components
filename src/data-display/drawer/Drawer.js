import React, { useEffect, useState, useRef } from "react";
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
  DrawerDialog,
  DrawerContainer
} from "./styles";

const Drawer = ({
  title,
  footer,
  closeButton,
  isChild,
  onClose,
  children,
  backdrop,
  visible,
  handleClose,
  onVisibleChange,
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
      onVisibleChange(); // Prop type: onVisibleChange = () => {};
      setDebouncedVisible(true);
      disableNavegation(true);
      setHide(false);
      clearTimeout(timeoutRef.current);
    } else {
      onVisibleChange(); // Prop type: onVisibleChange = () => {};
      setDebouncedVisible(false);
      timeoutRef.current = setTimeout(() => {
        disableNavegation(false);
        setHide(true);
      }, animationdelay); // Adicionar prop.delay para controle de animação
    }
  }, [visible]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const disableNavegation = disable => {
    if (!isChild)
     backdrop && disable
      ? (document.querySelector(":root").style.overflow = "hidden")
      : (document.querySelector(":root").style.overflow = "auto");
    else
      backdrop && disable
        ? (document.querySelector(":root").style.overflow = "hidden")
        : (document.querySelector(":root").style.overflow = "auto");
  };

  const BackdropProps = {
    backdropClosable: props.backdropProps,
    backdrop: props.backdrop,
    backdropStyle: props.backdropStyle,
    visible: debouncedVisible
  };

  const StyleProps = {
    zIndex: props.zIndex,
    placement: props.placement,
    backdrop: backdrop,
    ...props
  };

  const WrapperProps = {
    width: props.width,
    height: props.height,
    visible: debouncedVisible,
    placement: props.placement,
    ...props
  };

  const BodyProps = { width: props.width, height: props.height, ...props };

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
    return props.backdropClosable
      ? backdrop && (
          <Backdrop
            {...BackdropProps}
            className="backdrop"
            style={{ ...props.backdropStyle }}
            onClick={() => handleClose()}
          />
        )
      : backdrop && (
          <Backdrop
            {...BackdropProps}
            className="backdrop"
            style={{ ...props.backdropStyle }}
          />
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

  // Check if it is good to implement the footer
  // const renderFooter = () => {
  //   return footer && (
  //     <DrawerFooter>
  //       {footer}
  //     </DrawerFooter>
  //   );
  // };

  return (
    !hide && (
      <Portal>
        {
          <DrawerContainer>
            <DrawerStyle
              {...StyleProps}
              visible={debouncedVisible}
              animationdelay={animationdelay}
            >
              {renderBackdrop()}
            </DrawerStyle>
            <DrawerWrapper {...WrapperProps}>
              <DrawerDialog>
                <DrawerContent>
                  {renderHeader()}
                  <DrawerBody {...BodyProps} style={{ ...props.bodyStyle }}>
                    {children}
                  </DrawerBody>
                </DrawerContent>
              </DrawerDialog>
            </DrawerWrapper>
          </DrawerContainer>
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
  /** When Drawer is the son of another drawer */
  isChild: PropTypes.bool,
  /** width of drawer while its placement is right or left */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** z-index property of drawer */
  zIndex: PropTypes.number,
  /** amount of time to wait from applying the animation */
  animationDelay: PropTypes.number
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
  isChild: false,
  handleClose: noop,
  width: 310,
  zIndex: 1000,
  animationDelay: 1000
};

export default Drawer;
