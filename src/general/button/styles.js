import styled from "styled-components";

import colors from "../../constants/colors";

export const Icon = styled.span`
  svg {
    min-height: 10px;
    height: 100%;
  }
`;

export const LoadingFeedback = styled.div`
  position: relative;
  height: 100%;
  opacity: 0;
  transition: 0.3s;

  > span {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const ButtonChildren = styled.div`
  font-size: 14px;
  transition: 0.3s;

  ${props => props.textStyle}
`;

export const DefaultBtn = styled.button`
  display: flex;
  position: relative;
  padding: 0 25px;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${props => colors[props.colorType] || colors.default};
  transition: opacity 150ms ease-in-out;

  ${ButtonContent} {
    height: 35px;
    color: ${props => (props.colorType === "primary" ? "#fff" : "#000")};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    // cursor: no-drop;
    opacity: 0.5;
  }

  &.loading {
    opacity: 0.5;

    ${LoadingFeedback} {
      opacity: 1;
      transform: translate(-${props => props.loadingSize / 2 + 2}px);
    }

    ${ButtonChildren} {
      transform: translate(${props => props.loadingSize / 2 + 2}px);
    }
  }
`;
