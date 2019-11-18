import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  position: absolute;
`;

export const DropdownDispatcher = styled.div``;

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

  display: none;
  opacity: 0;
  transition: 0.1s opacity 0.1s cubic-bezier(0.55, 0.3, 0.5, 0.9);

  ${props =>
    props.visible &&
    css`
      display: block;
      opacity: 1;
    `}

  &:before {
    top: -26px;
    left: -18px;
    z-index: 2;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #fff;
    content: "";
    position: relative;
    display: block;
    width: 0;
    height: 0;
  }
`;
