import styled from "styled-components";


export const Container = styled.div`
  margin: 40px auto;
  position: relative;
  

  @media screen and (max-width: 1600px) {
    margin: 40px auto;
  }

  @media screen and (max-width: 767px) {
    margin: 20px;
    padding: 0;
  }
  `;

export const Popover = styled.div`
  box-sizing: border-box;
  color: black;
  position: absolute;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
  top: ${props => props.position.top};
  right: ${props => props.position.right};
  left: ${props => props.position.left};
  bottom: ${props => props.position.bottom};
  z-index: 5;

  &.popover-show{
    visibility: visible;
  }

  &.popover-hidden{
    visibility: hidden;
  }

  .popover-message{
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  }

  >section{
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.a`
  width: 50px;
  border-radius: 2px;
  background-color: #6abd7b;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  padding: 5px;
  margin-bottom: 15px;
  margin-left: 8px;
  cursor:pointer;

  @media screen and (max-width: 768px) {
    max-width: 280px;
    width: 100%;
  }
`;