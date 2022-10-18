import styled from "styled-components";

export const SummaryPostContainer = styled.div`
  margin: -5.5rem auto;
  max-width: 57rem;
  width: 100%;
  padding: 0 1.5rem;
`

export const SummaryPostContent = styled.div`
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem 2.5rem 2rem 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;
  
    & a {
      color: ${props => props.theme.blue};;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;

      &:hover {
        box-shadow: 0 2px 0 ${props => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 2rem;
    
    & span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      & svg {
        color: ${props => props.theme["base-label"]};
      }
    }
  }
`