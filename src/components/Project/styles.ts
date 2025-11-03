import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.BorderColor};
  padding: 16px;
`

export const ButtonLink = styled.a`
  color: ${(props) => props.theme.ButtonColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.ButtonBackgroundColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
