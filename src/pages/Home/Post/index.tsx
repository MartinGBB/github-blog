import { useNavigate } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { formatDate } from '../../../lib/formatDate'
import { ContentBody, PostContainer } from './styles'

interface PostProps {
  post: {
    title: string
    created_at: string
    body: string
    number: number
  }
}

export function Post({ post }: PostProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/${number}`)
  }

  const { title, created_at: date, body, number } = post
  return (
    <PostContainer onClick={handleClick}>
      <header>
        <h1>{title}</h1>
        <time title={formatDate(date).publishedDateFormatted} dateTime={date}>
          {formatDate(date).publishedDateRelativeToNow}
        </time>
      </header>
      <ContentBody remarkPlugins={[remarkGfm]}>{body}</ContentBody>
    </PostContainer>
  )
}
