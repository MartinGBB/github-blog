import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostEmptyContainer } from './styles'

export function PostEmpty() {
  return (
    <PostEmptyContainer>
      <FontAwesomeIcon icon={faFile} />
      <h3>Sem publicações para mostrar</h3>
    </PostEmptyContainer>
  )
}
