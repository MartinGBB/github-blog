import styled from 'styled-components'

export const HeaderPostContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem 2rem 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;

    & a,
    span {
      color: ${(props) => props.theme.blue};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-size: 0.75rem;
      cursor: pointer;
      &:hover {
        box-shadow: 0 2px 0 ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  div {
    display: flex;
    gap: 2rem;

    & span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      & svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
