import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./components/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}