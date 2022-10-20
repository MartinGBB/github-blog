import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostState } from '..'
import { formatDate } from '../../../lib/formatDate'
import { HeaderPostContainer } from './styles'

interface PostProps {
  postHeader: PostState
}

export function HeaderAboutPost({ postHeader }: PostProps) {
  if (!postHeader.user) return <h1>loading</h1>

  return (
    <HeaderPostContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <a href={postHeader.url}>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>{postHeader.title}</h1>

      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {postHeader.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time
            title={formatDate(postHeader.created_at).publishedDateFormatted}
            dateTime={postHeader.created_at}
          >
            {formatDate(postHeader.created_at).publishedDateRelativeToNow}
          </time>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {postHeader.comments}
        </span>
      </div>
    </HeaderPostContainer>
  )
}
