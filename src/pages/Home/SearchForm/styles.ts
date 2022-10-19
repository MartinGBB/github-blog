import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    margin: 0.75rem 0;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    padding: 0.75rem 1rem;
    width: 100%;
  }
`
