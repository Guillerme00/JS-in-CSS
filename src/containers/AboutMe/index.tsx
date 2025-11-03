import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab dolorum,
      id, quaerat voluptates quos accusantium, veritatis consectetur sit
      accusamus dignissimos nisi soluta expedita ullam repellat saepe delectus
      repudiandae cupiditate.
    </Paragraph>
    <GitSection>
      <img src="https://github-readme-stats-eight-kohl-45.vercel.app/api?username=Guillerme00&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats-eight-kohl-45.vercel.app/api/top-langs/?username=Guillerme00&layout=compact&langs_count=7&theme=dracula" />
    </GitSection>
  </section>
)

export default About
