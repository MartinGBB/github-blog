import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
}

input[type='text'] {
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
}

body {
  background-color: ${(props) => props.theme['base-background']};
  -webkit-font-smoothing: antialiased;
  color: ${(props) => props.theme['base-text']};
}

body, input, textarea, button {
  font: 400 1rem 'Nunito', sans-serif;
  line-height: 160%;
}
`
