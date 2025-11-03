import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.ButtonColor};
  background-color: ${(props) => props.theme.PrincipalColor};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
