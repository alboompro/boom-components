import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  z-index: ${props => props.zIndex};

  ${props => props.backdrop && "background-color: rgba(129, 129, 129, 0.8);"}
  ${props => props.backdrop && props.backdropStyle}
  ${props =>
    props.floatingStyle.top
      ? "align-items: flex-start;"
      : props.floatingStyle.bottom
      ? "align-items: flex-end;"
      : "align-items: center;"}
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props =>
    typeof props.width === "string" ? props.width : `${props.width}px`};
  height: ${props =>
    typeof props.height === "string" ? props.height : `${props.height}px`};
  max-width: 90%;
  max-height: 90%;
  background-color: ${props => props.background};
  border-radius: ${props => (props.rounded ? "3px" : 0)};

  ${props =>
    props.floatingStyle.top
      ? `margin-top: ${props.floatingStyle.top};`
      : props.floatingStyle.bottom
      ? `margin-bottom: ${props.floatingStyle.bottom};`
      : null}

  ${props => props.styles}
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.26);
  z-index: 1;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
  transition: all 0.1s ease-out 0s;

  &:hover {
    background-color: #efefef;
  }

  > img {
    width: 16px;
    pointer-events: none;
  }
`;

export const ModalTitle = styled.div`
  flex: 1;
  font-size: 15px;
  color: #4c4c4c;
  letter-spacing: 0.4px;
  line-height: initial;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ModalBody = styled.div`
  height: 100%;
  overflow: auto;
  ${props => props.bodyStyle}
`;

export const ModalFooter = styled.div`
  padding: 15px;
  border-top: 1px solid #eaeaea;
`;
