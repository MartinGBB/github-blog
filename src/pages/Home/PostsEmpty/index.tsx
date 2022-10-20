import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostEmptyContainer } from './styles'

export function PostEmpty() {
  return (
    <PostEmptyContainer>
      <FontAwesomeIcon icon={faFile} />
      <h3>Você ainda não tem post</h3>
    </PostEmptyContainer>
  )
}
