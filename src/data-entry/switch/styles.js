import styled from "styled-components";

export const SwitchComponent = styled.div`
  position: relative;
  display: flex;
  width: 45px;
  height: 20px;
  border-radius: 15px;
  margin-left: auto;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${props => (props.checked ? "#44ADF8" : "#C4C4C4")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: ${props => (props.checked ? "calc(100% - 18px);" : "2px;")};
    top: 2px;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
  }
`;
