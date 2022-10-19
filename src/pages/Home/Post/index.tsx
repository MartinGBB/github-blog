import { PostContainer } from './styles'

interface PostProps {
  post: {
    title: string
    updated_at: string
    body: string
    number: number
  }
}

export function Post({ post }: PostProps) {
  const { title, updated_at: date, body, number } = post

  return (
    <PostContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{date}</span>
      </header>

      <p>{body}</p>
    </PostContainer>
  )
}
