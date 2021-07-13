import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import Portal from "../../shared/portal";

import {
  Backdrop,
  DrawerStyle,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerWrapper
} from "./styles";
import { DrawerDialog } from "./styles";

const Drawer = ({
  title,
  footer,
  closeButton,
  onClose,
  children,
  backdrop,
  ...props
}) => {
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const backdropProps = {
    backdropClosable: props.backdropProps,
    backdrop: props.backdrop,
    backdropStyle: props.backdropStyle
  };

  const StyleProps = {
    zIndex: props.zIndex,
    hoverable: props.hoverable,
    ...props
  };

  // useEffect(() => {
  //   isDrawerOpen ? (
  //     render()}
  //   ) : null;
  // }, [isDrawerOpen]);

  // Function to close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Function to toggle Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const renderCloseButton = () => {
    return (
      closeButton && (
        <button
          type="button"
          aria-label="close"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            width: "20px",
            background: "none",
            borderStyle: "none"
          }}
          onClick={e => closeDrawer()}
        >
          x
        </button>
      )
    );
  };

  const renderBackdrop = () => {
    return props.backdropClosable ? (
      <Backdrop {...backdropProps} onClick={e => closeDrawer()} />
    ) : (
      <Backdrop {...backdropProps} />
    );
  };

  const renderHeader = () => {
    return (
      title &&
      closeButton && (
        <DrawerHeader>
          {title && <h1>{title}</h1>}
          {closeButton && renderCloseButton()}
        </DrawerHeader>
      )
    );
  };

  const renderFooter = () => {
    return footer && <DrawerFooter>{footer}</DrawerFooter>;
  };

  const render = () => {
    return (
      <DrawerStyle {...StyleProps}>
        {renderBackdrop()}
        <DrawerWrapper>
          <DrawerDialog>
            <DrawerContent>
              {renderHeader()}
              <DrawerBody>{children}</DrawerBody>
              <div>{renderFooter()}</div>
            </DrawerContent>
          </DrawerDialog>
        </DrawerWrapper>
      </DrawerStyle>
    );
  };

  return (
    <Fragment>
      <button onClick={e => toggleDrawer()}>SHOW ME</button>
      {isDrawerOpen && <Portal>{render()}</Portal>}
    </Fragment>
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
  height: 256,
  onVisibleChange: noop,
  placement: "right",
  title: null,
  visible: false,
  width: 256,
  zIndex: 1000
};

export default Drawer;
