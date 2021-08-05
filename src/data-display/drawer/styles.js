import styled, { keyframes } from "styled-components";

// function that tests a RegEx to validate the size format
const patternSize = (string) => {
  const regex = /^[0-9]+(\.[0-9]+)?(px|em|rem|vh|vw|vmin|vmax|mm|cm|in|pt|pc)$/;
  return regex.test(string);
};

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
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const rightSlideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0%); }
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
  content: "";
  ${props => (props.backdrop ? "display: none;" : "display: block;")}
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  ${props => (props.visible ? "opacity: 0.8;" : "opacity: 0;")}
`;

// Drawer Container Style
export const DrawerContainer = styled.div`
  display: flex;
`;

// Drawer Style
export const DrawerStyle = styled.div`
  position: fixed;
  z-index: ${props => props.zIndex};
  top: 0;
  ${props =>
    !props.backdrop ? "pointer-events: none;" : "pointer-events: all;"};
  color: #000000d9;
`;

// Drawer Wrapper Style
export const DrawerWrapper = styled.div`
  position: fixed;
  z-index: ${props => props.zIndex};
  ${props => {
    switch (props.placement) {
      case "left":
        return `top: 0;
                left: 0;`;
      case "right":
        return `top: 0;
                right: 0`;
      case "bottom":
        return `left: 0;
                bottom: 0`;
      case "top":
        return `left: 0;
                top: 0`;

      default:
        break;
    }
  }}
  ${props => {
    debugger;
    if (props.placement !== "top" && props.placement !== "bottom")
      return `width: ${
        patternSize(props.width) ? props.width : `${props.width}px`
      }; height: 100%`;
    else
      return `height: ${
        patternSize(props.height) ? props.height : `${props.height}px`
      }; width: 100%`;
  }}
  animation: ${props => {
    if (props.visible) {
      switch (props.placement) {
        case "left":
          return leftSlideIn;
        case "right":
          return rightSlideIn;
        case "top":
          return topSlideIn;
        case "bottom":
          return bottomSlideIn;

        default:
          break;
      }
    } else {
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
  height: 100%;

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
  position: relative;
  overflow: auto;
  margin: 30px 20px;

  ${props => {
    switch (props.placement) {
      case "left":
        return `height: 100vh;`;
      case "right":
        return `height: 100vh;`;
      case "top":
        return `height: calc(${
          patternSize(props.height) ? props.height : `${props.height}px`
        } - 100px);`; // 30 + 20 + 20 + 20 + 10 = 100px
      case "bottom":
        return `height: calc(${
          patternSize(props.height) ? props.height : `${props.height}px`
        } - 100px);`; // 30 + 20 + 20 + 20 + 10 = 100px

      default:
        break;
    }
  }}
`;
