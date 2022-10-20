import { useContext, useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { PostContext } from '../../contexts/PostContext'
import { api } from '../../lib/axios'
import { Post } from './Post'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostsContent } from './styles'

export interface UserDataProfile {
  avatar_url: string
  name: string
  bio: string
  html_url: string
  login: string
  company: string
  followers: number
}

export function Home() {
  const { postList } = useContext(PostContext)

  const [userData, setUserData] = useState<UserDataProfile>()

  async function fetchUser() {
    const response = await api.get('users/MartinGBB')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (!userData?.avatar_url || !postList[0]?.title) return <Loading />

  return (
    <HomeContainer>
      <Profile user={userData} />
      <SearchForm />

      <PostsContent>
        {postList.map((data) => (
          <Post key={data.number} post={data} />
        ))}
      </PostsContent>
    </HomeContainer>
  )
}
