import { DescriptionPost } from './DescriptionPost'
import { HeaderAboutPost } from './HeaderAboutPost'
import { AboutPostContainer } from './styles'

export function AboutPost() {
  // const { id } = useParams();

  return (
    <AboutPostContainer>
      <HeaderAboutPost />
      <DescriptionPost />
    </AboutPostContainer>
  )
}
