import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #444444;
  font-size: 12px;
  margin-right: 10px;

  ${props =>
    props.disabled
      ? `
      cursor: not-allowed;
      opacity: .6;
    `
      : `
      cursor: pointer;
    `};
`;

export const RadioButton = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #b7b7b7;
  position: relative;
  outline: none;
  margin-right: 10px;

  &:checked {
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      background-color: #44adf8;
      position: absolute;
      border-radius: 50%;
      top: 2px;
      left: 2px;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
