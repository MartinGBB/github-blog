import styled from 'styled-components'

export const PostEmptyContainer = styled.div`
  text-align: center;
  margin: 0 auto 5rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    height: 4rem;
    margin-bottom: 1rem;
  }
`
