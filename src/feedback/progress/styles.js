import styled, { css, keyframes } from "styled-components";

const length = 295.3097094374406; // Math.PI * 2 * 47 -> (2pi * radius);

const loadingLineAnimation = keyframes`
  0% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.1;
  }
  20% {
    transform: translateX(-100%) scaleX(0);
    opacity: 0.6;
  }
  100% {
    transform: translateX(0) scaleX(1);
    opacity: 0;
  }
`;

const loadingCircleAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  width: ${props => (props.width ? `${props.width}px` : "100%")};
`;

export const ContainerBar = styled.div`
  ${props => {
    if (props.format == "linear")
      return `
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;
        margin-right: 0;
        padding-right: 0;
      `;
    else
      return `
        position: relative;
        width: 100%;
        margin-right: 0;
        padding-right: 0;
      `;
  }}
  ${props =>
    props.format == "circular" &&
    props.loading &&
    css`
      & > svg {
        animation: ${loadingCircleAnimation} 1s linear infinite;
      }
    `};
`;

// Style for the progress bar

export const ProgressLine = styled.div`
  position: relative;
  transition: all 0.5s cubic-bezier(0.08, 0.82, 0.17, 1);
  border-radius: 100px;

  background-color: ${props => (props.color ? props.color : "royalblue")};
  width: ${props => props.value}%;
  height: 8px;

  ${props =>
    props.loading &&
    css`
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        border-radius: 10px;
        opacity: 0;
        animation: ${loadingLineAnimation} 2.4s cubic-bezier(0.23, 1, 0.32, 1)
          infinite;
        content: "";
      }
    `}
`;

export const ProgressTrailLine = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  border-radius: 100px;

  background-color: #f5f5f5;
`;

export const ProgressLineLabel = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;

export const ProgressCircle = styled.path`
  stroke-opacity: ${props => (props.value > 0 ? 1 : 0)};
  stroke: ${props => (props.color ? props.color : "royalblue")};
  stroke-dasharray: ${props => (props.value ? props.value / 100 : 0) * length}px
    ${length}px;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.3s ease, stroke-dasharray 0.2s ease-in-out,
    stroke 0.3s;
`;

export const ProgressTrailCircle = styled.path`
  stroke: #f5f5f5;
  stroke-dasharray: ${length}px ${length}px;
  stroke-dashoffset: 0;
`;

export const ProgressCircleLabel = styled.span`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 36px;
  color: black;
`;
