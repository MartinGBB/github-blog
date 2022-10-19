import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { Post } from './Post'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostsContent } from './styles'

export function Home() {
  const { postList } = useContext(PostContext)
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />

      <PostsContent>
        {postList.map((data) => (
          <Post key={data.number} post={data} />
        ))}
      </PostsContent>
    </HomeContainer>
  )
}
