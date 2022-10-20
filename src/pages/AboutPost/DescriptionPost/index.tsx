import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import { DescriptionPostContainer } from './styles'

interface PostProps {
  body: string
}

export function DescriptionPost({ body }: PostProps) {
  return (
    <DescriptionPostContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </DescriptionPostContainer>
  )
}
