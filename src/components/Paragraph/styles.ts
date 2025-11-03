import styled from 'styled-components'

import { Props } from '.'

export const P = styled.h3<Props>`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.tipe === 'principal' ? '#282a35' : '#949494')};
  font-weight: 500;
`
