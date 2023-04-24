import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  * {
    box-sizing: border-box;
  }
`;

export const Label = styled.span`
  flex: 0;
  margin: 0 0 5px;
  color: #000;
  font-size: 14px;
  line-height: 16px;
`;

export const SelectContent = styled.div`
  flex: 1;
  position: relative;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c9c9c9;
  position: relative;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  height: 30px;
  padding: 0 5px 0 10px;
  font-size: 14px;
  opacity: ${props => (props.disabled ? ".5" : "1")};
  border-radius: ${props =>
    props.roundedBorder ? `${props.roundedBorder}px` : "unset"};

  &:after {
    content: "";
    display: ${props => (props.showArrow ? "block" : "none")};
    width: 0;
    height: 0;
    margin-left: auto;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    ${props => `border-${props.open ? "bottom" : "top"}: 5px solid #595959;`}
  }

  ${props => props.selectStyle}
`;

export const OptionContainer = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  ${props => props.border && `border-${props.border}: none;`}
  cursor: pointer;
  overflow: auto;
  border-radius: ${({ roundedBorder }) => roundedBorder || "unset"};

  ${props => props.style}
`;

export const OptionScroll = styled.ul`
  overflow-y: auto;
  max-height: ${props => `${props.maxHeight}px`};
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: ${props => (props.selected ? "600" : "500")};
  background-color: ${props => (props.hovered ? props.hoverBgColor : "#fff")};
  ${props => props.multiSelected && "color: #b3b3b3"}
`;

export const DropdownBackdrop = styled.div`
  * {
    box-sizing: border-box;
  }

  position: absolute;
  z-index: ${props => props.zIndex};
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  ${props => props.style}
`;

export const Placeholder = styled.span`
  font-size: 12px;
  color: #9c9c9c;
`;

export const ActionsContainer = styled.div``;
