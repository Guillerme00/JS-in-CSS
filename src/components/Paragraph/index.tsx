import { P } from './styles'

export type Props = {
  children: string
  tipe?: 'principal' | 'Secundary'
  fontSize?: number
}

const Paragraph = ({ children, tipe = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipe={tipe}>
    {children}
  </P>
)

export default Paragraph
