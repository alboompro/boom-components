import styled, { css } from "styled-components";
import { update } from "../../settings";

export const inputSettings = update("input", {
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
  errorColor: "#FF5252",
  errorMinHeight: "17px",
  errorPadding: "5px 0 0",
  descriptionSize: "12px",
  descriptionMargin: "0 0 5px",
  helpTextPadding: "5px 0 0",
  helpTextSize: "11px",
  counterColor: "#858585",
  counterSize: "11px",
  counterPadding: "5px 0 0"
});

export const DefaultDataEntryCSS = css`
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

export const DefaultDataEntryTextContainer = styled.div`
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

export const InputField = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ErrorLabel = styled.div`
  min-height: ${inputSettings.errorMinHeight};
  padding: ${inputSettings.errorPadding};
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

export const Description = styled.div`
  color: #7d7d7d;
  font-size: ${inputSettings.descriptionSize};
  margin: ${inputSettings.descriptionMargin};
`;

export const InputSuffix = styled.div`
  display: flex;
`;

export const InputSuffixLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HelpTextLabel = styled.div`
  padding: ${inputSettings.helpTextPadding};
  font-size: ${inputSettings.helpTextSize};
`;

export const InputSuffixCounter = styled.div`
  font-size: ${inputSettings.counterSize};
  color: ${inputSettings.counterColor};
  padding: ${inputSettings.counterPadding};
`;
