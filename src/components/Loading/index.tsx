import ReactLoading from 'react-loading'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type="spinningBubbles" color="#3294F8" />
    </LoadingContainer>
  )
}
