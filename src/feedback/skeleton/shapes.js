import React from "react";
import styled, { css, keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: .6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .6;
  }
`;

const Shape = styled.div`
  width: ${props =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${props =>
    typeof props.width === "number" ? `${props.height}px` : props.height};
  background-color: ${props => props.color || "#e8e3e3"};
  margin-bottom: 8px;
  ${props =>
    props.animated &&
    css`
      animation: ${pulse} 1.5s infinite;
    `}

  ${props =>
    props.rounded &&
    css`
      border-radius: 500rem;
    `}
`;

export const SkeletonContainer = styled.div`
  display: flex;
  .skeleton-avatar {
    margin-right: 15px;
  }
  .skeleton-content {
    width: 100%;
  }
`;

export const Square = ({ color = null, animated = true, size = 32 }) => {
  return <Shape color={color} animated={animated} width={size} height={size} />;
};

export const Circle = ({ color = null, animated = true, size = 32 }) => {
  return (
    <Shape
      color={color}
      rounded
      animated={animated}
      width={size}
      height={size}
    />
  );
};

export const Line = ({
  color = null,
  animated = true,
  width = "100%",
  height = 16
}) => {
  return (
    <Shape color={color} animated={animated} width={width} height={height} />
  );
};
