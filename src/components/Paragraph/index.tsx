import { P } from './styles'

export type Props = {
  children: string
  tipe?: 'principal' | 'Secundary'
}

const Paragraph = ({ children, tipe = 'principal' }: Props) => (
  <P tipe={tipe}>{children}</P>
)

export default Paragraph
