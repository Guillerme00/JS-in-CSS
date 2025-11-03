import styled from 'styled-components'

type ButtonProps = {
  Principal?: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.Principal ? 'green' : 'red')};
  color: white;
  font-size: ${(props) => props.fontSize || '16px'};
`

const ButtonDanger = styled(Button)`
  background-color: red;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="18px" Principal>
        Enviar
      </Button>
      <Button fontSize="18px" Principal={false}>
        Cancelar
      </Button>
      <ButtonDanger as="a">
        <span>Do not Click here</span>
      </ButtonDanger>
    </>
  )
}

export default Teste
