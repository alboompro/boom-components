import styled, { css } from "styled-components";

// some variables
const borderStyle = "1px solid #d9d9d9";
const textColor = "#666";

export const CollapseWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 3px;
  border: ${borderStyle};

  .panel {
    border-top: ${borderStyle};
    &:first-child {
      border-top: none;
    }

    .header {
      display: flex;
      align-items: center;

      line-height: 22px;
      padding: 10px 16px;
      color: ${textColor};
      cursor: pointer;
      &:focus {
        outline: none;
      }

      .expand-icon {
        &.expand-icon-left {
          margin-right: 10px;
        }

        &.expand-icon-right {
          margin-right: 0;
          margin-left: auto;
          order: 2;
        }
      }
    }

    &.panel-disabled {
      .header {
        cursor: not-allowed;
        color: rgba(0, 0, 0, 0.3);
        background-color: #f3f3f3;
      }
    }

    .animation-wrapper {
      transition: height 0.2s ease-out;
    }

    .body {
      overflow: hidden;
      color: ${textColor};
      padding: 0 16px;
      background-color: #fff;

      &.body-active {
        border-top: ${borderStyle};
      }

      &.body-inactive {
        display: none;
      }

      .body-content-box {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  transition: 0.1s linear;
  display: flex;
  align-items: center;
  ${props =>
    props.open &&
    css`
      transform: rotate(90deg);
    `}
`;
