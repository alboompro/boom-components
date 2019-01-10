import styled from 'styled-components'

import colors from '../../../constants/colors'

export const DefaultInput = styled.input`
  display: inline-block;
  position: relative;
  border: 1px solid ${colors.default};
  border-radius: 4px;
  width: 200px;
  margin: 0 8px 8px 0;
  line-height: 1.5;
  padding: ${props => (props.size === 'large' ? '6px 11px' : '4px 11px')};
  font-size: ${props => (props.size === 'large' ? '16px' : '14px')};
  height: ${props => (props.size === 'large' ? '40px' : '32px')};
`
