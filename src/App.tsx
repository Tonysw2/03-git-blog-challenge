import { ThemeProvider } from 'styled-components'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />

      <GlobalStyle />
    </ThemeProvider>
  )
}
