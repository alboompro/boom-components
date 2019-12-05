import styled from "styled-components";

export const RadioButtonLabel = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #bebebe;
`;

export const RadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-right: 10px;

  &:hover ~ ${RadioButtonLabel} {
    background: #44adf8;
    border: 1px solid #b7b7b7;
    border-radius: 50%;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: #fff;
    }
  }

  &:checked + ${RadioButtonLabel} {
    background: #fff;
    border: 1px solid #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 2px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: #44adf8;
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  color: #444444;
  font-size: 12px;
  ${props =>
    props.disabled
      ? `
      cursor: not-allowed;
      opacity: .6;
    `
      : `
      cursor: pointer;
    `};
  ${props => props.style && props.style}
`;

export const RadioContent = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const Label = styled.div`
  ${props => props.style && props.style}
`;
