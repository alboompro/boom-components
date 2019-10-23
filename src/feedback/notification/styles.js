import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
  padding: 15px 25px;
  overflow: hidden;
  border-radius: 4px;
  max-width: 270px;
  position: relative;
  transition: all 0.3s ease-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props =>
    props.visible ? "translateX(0px)" : "translateX(335px)"};
`;

export const Message = styled.span`
  font-size: 14px;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  cursor: pointer;
`;
