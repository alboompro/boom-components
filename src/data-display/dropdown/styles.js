/* eslint-disable indent */
import { createGlobalStyle, css } from "styled-components";

export const DropdownStyle = createGlobalStyle`
  .alb-dropdown{
    position: absolute;
    border-radius: 3px;
    width: 220px;
    border: 1px solid #E0E0E0;
    background-color: #fff;
    ${props =>
      props.showArrow &&
      css`
        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          display: block;
          width: 0;
          height: 0;
        }
        &:before {
          top: -6px;
          right: 10px;
          z-index: 2;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 6px solid #fff;
        }
        &:after {
          top: -8px;
          right: 7px;
          z-index: 1;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #e0e0e0;
        }
      `}
    
  }

  .alb-dropdown-hidden {
    display: none;
  }
`;
