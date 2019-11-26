/* eslint-disable indent */
import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  z-index: 100;
`;

export const PositionWrapper = styled.div`
  position: absolute;
  z-index: 101;
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
  z-index: 102;

  &:before {
    position: absolute;
    content: "";
    display: block;
    width: 0;
    height: 0;

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
      if (props.arrowPos === "top") {
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
  }
`;
