import styled from "styled-components";

export const ProgressWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerBar = styled.div`
  flex: 1;
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
`;

export const Bar = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5; // To do: add color prop
  border-radius: 100px;
`;

export const ProgressBar = styled.div`
  position: relative;
  transition: all 0.5s cubic-bezier(0.08, 0.82, 0.17, 1);
  border-radius: 100px;
  background-color: blueviolet; // To do: Mudar a cor com o estilo

  height: 8px; // To do: mudar o tamanho do progress bar
  width: ${props => props.value}%;
`;

export const ProgressText = styled.div`
  margin-left: 8px;
  font-weight: bold;
`;
