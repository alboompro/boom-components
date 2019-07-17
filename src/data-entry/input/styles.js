import styled from "styled-components";
import { update } from "../../settings";

const inputSettings = update("input", {
  labelMargin: "0 0 5px",
  labelColor: "#000",
  labelSize: "14px",
  labelLineHeight: "16px",
  inputBorder: "1px solid #c9c9c9",
  inputBorderRadius: "1px",
  inputMarginBottom: "8px",
  inputColor: "#1e1e1e",
  inputPadding: "8px 15px",
  inputFontSize: "14px",
  inputErrorSize: "11px",
  inputPaddingError: "17px",
  errorColor: "#FF5252"
});

export const DefaultInputContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: ${inputSettings.inputPaddingError};
  margin-bottom: ${inputSettings.inputMarginBottom};
  ${props => (props.error && props.error.message ? "padding-bottom: 0" : null)};
`;

export const Label = styled.label`
  margin: ${inputSettings.labelMargin};
  color: ${inputSettings.labelColor};
  font-size: ${inputSettings.labelSize};
  line-height: ${inputSettings.labelLineHeight};
  ${props => (props.labelStyle ? props.labelStyle : null)}
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const InputIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  user-select: none;
  ${props => props.prefix && "left: 7px;"}
  ${props => props.suffix && "right: 7px;"}
`;

export const InputDefault = styled.input`
  width: 100%;
  padding: ${inputSettings.inputPadding};
  color: ${inputSettings.inputColor};
  font-size: ${inputSettings.inputFontSize};
  border: none;
  background-color: #fff;
  border: ${inputSettings.inputBorder};
  border-radius: ${inputSettings.inputBorderRadius};
  &:focus{
    outline: none;
  }
  ${props =>
    props.error ? `border-color: ${inputSettings.errorColor};` : null}
  ${props => (props.disabled ? "opacity: 0.8;" : null)}
  ${props => props.inputStyle}
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ErrorLabel = styled.div`
  min-height: ${inputSettings.inputPaddingError};
  color: ${inputSettings.errorColor};
  font-size: ${inputSettings.inputErrorSize};
`;

export const ClearebleIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  margin: 0 0 0 5px;
  height: 100%;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.clearablePosition ? `right: ${props.clearablePosition};` : null}
`;
