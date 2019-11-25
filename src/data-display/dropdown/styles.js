/* eslint-disable indent */
import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const DropdownDispatcher = styled.div`
  height: 100%;
  width: 100%;
`;

export const DropdownContent = styled.div`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 6px;
  padding: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #212121;
  text-align: left;
  width: 230px;

  position: absolute;
  top: calc(100% + 6px);
  ${props =>
    props.verticalAlign &&
    props.verticalAlign === "top" &&
    css`
      top: auto;
      bottom: calc(100% + 6px);
    `}

  ${props => {
    switch (props.align) {
      case "right":
        return css`
          right: 0;
        `;
      case "center":
        return css`
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return css`
          left: 0;
        `;
    }
  }}

  visibility: hidden;
  opacity: 0;
  transition: 0.1s opacity 0.1s cubic-bezier(0.55, 0.3, 0.5, 0.9);
  z-index: 2;

  ${props =>
    props.visible &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  &:before {
    position: absolute;

    ${props => {
      switch (props.align) {
        case "right":
          return css`
            left: calc(100% - 16px);
          `;
        case "center":
          return css`
            left: 50%;
            transform: translateX(-50%);
          `;
        default:
          return css`
            left: 10px;
          `;
      }
    }}

    z-index: 3;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    ${props => {
      if (props.verticalAlign === "top") {
        return css`
          top: 100%
          border-top: 6px solid white;
        `;
      }
      return css`
        top: -6px;
        border-bottom: 6px solid white;
      `;
    }}
    content: "";
    display: block;
    width: 0;
    height: 0;
  }
`;
