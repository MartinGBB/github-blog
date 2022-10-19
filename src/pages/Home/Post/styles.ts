import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled(Link)`
  max-height: 16.25rem;
  max-width: 26rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
  }

  @media (max-width: 890px) {
    margin: 0 auto;
    margin-bottom: 2rem;
    max-width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.125rem;
    gap: 1rem;

    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-title']};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    time {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const ContentBody = styled(ReactMarkdown)`
  color: ${(props) => props.theme['base-text']};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
