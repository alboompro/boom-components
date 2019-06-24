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
  ${props => props.floatingStyle.top
    ? 'align-items: flex-start;'
    : props.floatingStyle.bottom 
    ? 'align-items: flex-end;'
    : 'align-items: center;'
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  max-width: 90%;
  background-color: ${props => props.background};
  border-radius: ${props => (props.rounded ? "3px" : 0)};

  ${props => props.floatingStyle.top 
    ?  `margin-top: ${props.floatingStyle.top };`
    : props.floatingStyle.bottom 
    ? `margin-bottom: ${props.floatingStyle.bottom };`
    : null
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justfy-content: center;
  padding: 18px 17px 15px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.26);
  }
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  margin-left: auto;
  > img {
    width: 16px;
    pointer-events: none;
  }
`;

export const ModalTitle = styled.div`
  flex: 1;
  font-size: 15px;
  color: #4c4c4c;
  font-weight: 400;
`;

export const ModalBody = styled.div`
  ${props => props.bodyStyle}
`;

export const ModalFooter = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #eaeaea;
`;
