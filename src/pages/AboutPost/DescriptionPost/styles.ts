import styled from 'styled-components'

export const DescriptionPostContainer = styled.div`
  padding: 2.5rem 2rem 2rem 1.5rem;

  h1,
  h2,
  h3 {
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }

  img {
    margin: 1rem 0;
    max-width: 100%;
    width: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  pre {
    margin: 1.5rem 0;
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
    overflow: auto;
  }
`
