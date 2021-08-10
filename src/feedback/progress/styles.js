import styled, { css, keyframes } from "styled-components";

const loadingAnimation = keyframes`
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

export const ProgressWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerBar = styled.div`
  flex: 1;
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
`;

export const Bar = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  border-radius: 100px;

  background-color: #f5f5f5; // To do: add color prop
`;

export const ProgressBar = styled.div`
  position: relative;
  transition: all 0.5s cubic-bezier(0.08, 0.82, 0.17, 1);
  border-radius: 100px;

  background-color: ${props => props.color};
  width: ${props => props.value}%;
  height: 8px;
  ${props => props.styleProgress};

  ${props =>
    props.loading &&
    props.value != props.max &&
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
        animation: ${loadingAnimation} 2.4s cubic-bezier(0.23, 1, 0.32, 1)
          infinite;
        content: "";
      }
    `}
`;

export const ProgressText = styled.div`
  ${props =>
    props.textStyle
      ? props.textStyle
      : `margin-left: 8px;
        font-weight: bold;`};
  & > span {
    margin: 0 8px;
  }
`;
