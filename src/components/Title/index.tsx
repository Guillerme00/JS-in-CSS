import { Title as TitleForm } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleForm fontSize={props.fontSize}>{props.children}</TitleForm>
)

export default Title
