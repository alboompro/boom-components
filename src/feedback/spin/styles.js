import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  opacity: ${props => (props.show ? 0.5 : 1)};
`;

export const Container = styled.div`
  display: ${props => (props.show ? "inline-block" : "none")};
  text-align: center;
  position: ${props => (props.hasChildren ? "absolute" : "static")};
  top: ${props => (props.hasChildren ? "50%" : "0%")};
  left: ${props => (props.hasChildren ? "50%" : "0%")};
  transform: ${props => (props.hasChildren ? "translate(-50%, -50%)" : "none")};
`;

export const Text = styled.div`
  font-size: 14px;
`;

export const Spinner = styled.div`
  user-select: none;
  display: inline-block;
  text-align: center;
  animation: ${rotate} 1.4s linear infinite;
  z-index: 10;
  transform: translateZ(0);
  height: ${props => props.size === "large" ? "32px" : props.size === "small" ? "14px" : "20px"};
  width: ${props => props.size === "large" ? "32px" : props.size === "small" ? "14px" : "20px"};

  img {
    height: ${props => props.size === "large" ? "32px" : props.size === "small" ? "14px" : "20px"};
    width: ${props => props.size === "large" ? "32px" : props.size === "small" ? "14px" : "20px"};
  }

  .loader {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-top-color: rgba(33, 128, 192, 0.8);
    border-radius: 100%;
  }
`;