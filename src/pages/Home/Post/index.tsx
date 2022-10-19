import { formatDate } from '../../../lib/formatDate'
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
  console.log(formatDate(date))

  return (
    <PostContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <time title={formatDate(date).publishedDateFormatted} dateTime={date}>
          {formatDate(date).publishedDateRelativeToNow}
        </time>
      </header>

      <p>{body}</p>
    </PostContainer>
  )
}
