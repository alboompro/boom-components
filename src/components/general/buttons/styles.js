import styled from 'styled-components'

export const DefaultBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 20px;
  border: 0;
  border-radius: 2px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: no-drop;

    &:hover {
      opacity: 1;
    }
  }
`

export const Icon = styled.span`
  svg {
    min-height: 10px;
    height: 100%;
  }
`

export const Text = styled.span`
  flex: 1;
`
