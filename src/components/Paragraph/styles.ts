import styled from 'styled-components'

import { Props } from '.'

export const P = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipe === 'principal'
      ? props.theme.PrincipalColor
      : props.theme.SecundaryColor};
  font-weight: 500;
`
