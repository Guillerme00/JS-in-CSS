import styled from 'styled-components'

export const GitSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  img {
    height: 157px;
    margin-bottom: 64px;
    margin-top: 32px;
    height: auto;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 32px;
    margin-top: 32px;

    img {
      margin-bottom: 0px !important;
      margin-top: 0px !important;
      width: 100%;
    }
  }
`
