import styled from "styled-components";

export const CheckboxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  margin-right: 5px;
  cursor: pointer;
  ${props =>
    props.checked && "background-color: #44ADF8; border-color: #44ADF8;"}
  ${props => props.style && props.style}
`;

export const CheckboxContainer = styled.div`
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

export const CheckboxContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  ${props => props.style && props.style}
`;
