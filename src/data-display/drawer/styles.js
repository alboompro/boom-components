import styled from "styled-components";

// Estilos em Drawer
export const DrawerStyle = styled.div`
  position: fixed;
  z-index: 1050;
  top: 0;
  height: 100%;
  color: #000000d9;
`;

export const DrawerWrapper = styled.div`
  display: block;
  top: 0;
  height: 100%;
  width: 256px;
  /* adicionar alteração de tamanho pela prop e local de swipe  */
`;

export const DrawerDialog = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DrawerContent = styled.div`
  position: absolute;
  background-color: #fff;
  outline: 0;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12),
    0 0 10px rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06);
`;

export const DrawerHeader = styled.div`
  position: relative;
  margin: 20px 20px 0;
  display: flex;
  justify-content: space-around;

  &h1 {
    font: bold;
  }
`;

export const DrawerBody = styled.div`
  overflow: auto;
  position: relative;
  margin: 30px 20px;
  height: 100%;
`;

export const DrawerFooter = styled.div`
  text-align: right;
  border-top: none;
  margin: 0 20px 20px;
`;

// Estilo do Backdrop
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: auto;
  background-color: #000;
  transition: opacity 0.3s ease-in;
  opacity: 0;

  & {
    opacity: 0.8;
  }

  /* Alterar opacity nas mudanças de estado */
`;
