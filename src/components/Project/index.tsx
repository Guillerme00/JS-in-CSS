import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, ButtonLink } from './styles'

const Project = () => (
  <Card>
    <Title>Project To Do List</Title>
    <Paragraph tipe="Secundary">To Do List created with VueJS</Paragraph>
    <ButtonLink>Access project</ButtonLink>
  </Card>
)

export default Project
