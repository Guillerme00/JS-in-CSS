import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Guilherme M. Toledo</Title>
      <Paragraph tipe="Secundary" fontSize={16}>
        Guillerme00
      </Paragraph>
      <Description fontSize={12}>Front-End Engineer</Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
