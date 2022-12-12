import { ThemeProvider } from 'styled-components'
import { UserContextProvider } from './contexts/userContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <Router />
      </UserContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
