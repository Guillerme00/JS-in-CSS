import { ThemeProvider } from 'styled-components'

import About from './containers/AboutMe'
import Projects from './containers/Projects'
import Sidebar from './containers/Siderbar'
import GlobalStyle, { Container } from './styles'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [UsingDarkTheme, setUsingDarkTheme] = useState(true)

  function switchTheme() {
    setUsingDarkTheme(!UsingDarkTheme)
  }

  return (
    <ThemeProvider theme={UsingDarkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar SwitchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
