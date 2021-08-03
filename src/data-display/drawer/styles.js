import styled, { keyframes } from "styled-components";

// -> fade animations for the backdrop
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0.8;
  }

  to {
    opacity: 0;
  }
`;

// -> slide animations for the drawer
const leftSlideIn = keyframes`
  animationName: slideInLeft;
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const rigthSlideIn = keyframes`
  animationName: slideInRight;
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const topSlideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`;

const bottomSlideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`;

const leftSlideOut = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-100%); }
`;

const rightSlideOut = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
`;

const topSlideOut = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(-100%); }
`;

const bottomSlideOut = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(100%); }
`;

// Backdrop Style
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: auto;
  background-color: #000;
  animation: ${props => props.visible && (props.visible ? fadeIn : fadeOut)}
    0.5s ease-in-out;
  ${props => props.visible && (props.visible ? "opacity: 0.8;" : "opacity: 0;")}
`;

// Drawer Style
export const DrawerStyle = styled.div`
  position: fixed;
  z-index: ${props => props.zIndex};
  top: 0;
  ${props => {
    if (props.placement === "left" || props.placement === "top")
      return `left: 0;`;
    else return `right: 0;`;
  }}
  height: 100%;
  width: 100%;
  color: #000000d9;
`;

export const DrawerWrapper = styled.div`
  // Add size change by prop and swipe location (top and bottom)
  display: block;
  ${props => (props.placement === "top" ? "top: 0;" : "bottom: 0;")}
  ${props => {
    if (props.placement !== "top" && props.placement !== "bottom")
      return `width: ${props.width}px; height: 100%`;
    return `height: ${props.height}px; width: 100%`;
  }}
  animation: ${props => {
    console.log(`placement: ${props.placement} | visible: ${props.visible}`);
    if (props.visible) {
      if (props.placement) {
        switch (props.placement) {
          case "left":
            return leftSlideIn;
          case "right":
            return rigthSlideIn;
          case "top":
            return topSlideIn;
          case "bottom":
            return bottomSlideIn;

          default:
            break;
        }
      }
    } else {
      if (props.placement) {
        switch (props.placement) {
          case "left":
            return leftSlideOut;
          case "right":
            return rightSlideOut;
          case "top":
            return topSlideOut;
          case "bottom":
            return bottomSlideOut;

          default:
            break;
        }
      }
    }
  }}
    0.7s forwards;
`;

export const DrawerDialog = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DrawerContent = styled.div`
  position: absolute;
  background-color: #fff;
  outline: 0;
  width: 100%;
  height: 100%; // Add size change by swipe location
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12),
    0 0 10px rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06);
`;

export const DrawerHeader = styled.div`
  margin: 20px 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: bolder;
    font-size: 1.5em;
    line-height: 1.25;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
  }
`;

export const DrawerBody = styled.div`
  display: table;
  overflow: auto;
  margin: 30px 20px;
`;
