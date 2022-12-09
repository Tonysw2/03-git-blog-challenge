import { ThemeProvider } from 'styled-components'
import { IssueContextPovider } from './contexts/issuesContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssueContextPovider>
        <Router />
      </IssueContextPovider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
