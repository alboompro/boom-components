/* eslint-disable indent */
import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  .dispatcher {
    display: inline-block;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .dropdown-placement {
    position: absolute;
    z-index: 1080;
  }
`;

export const DropdownPlacement = styled.div`
  position: absolute;
  z-index: 1080;
`;

export const DropdownContent = styled.div`
  border-radius: 3px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 6px;
  padding: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #212121;
  text-align: left;
  width: 230px;
  margin-top: 6px;

  &:before {
    position: absolute;
    content: "";
    display: ${props => (props.showArrow ? "block" : "none")};
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
          top: 100%;
          border-top: 6px solid white;
        `;
      }
      return css`
        top: 0;
        border-bottom: 6px solid white;
      `;
    }}
  }
`;
