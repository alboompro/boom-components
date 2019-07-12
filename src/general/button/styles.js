import styled from "styled-components";

import colors from "../../constants/colors";

export const DefaultBtn = styled.button`
  display: inline-block;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 20px;
  border: 0;
  border-radius: 2px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 150ms ease-in-out;
  background-color: ${props => colors[props.colorType] || colors.default};
  color: ${props => (props.colorType === "primary" ? "#fff" : "#000")};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: no-drop;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Icon = styled.span`
  svg {
    min-height: 10px;
    height: 100%;
  }
`;
