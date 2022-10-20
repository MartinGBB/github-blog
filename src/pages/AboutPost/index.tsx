import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { REPOSITORY, USER } from '../../contexts/PostContext'
import { api } from '../../lib/axios'
import { DescriptionPost } from './DescriptionPost'
import { HeaderAboutPost } from './HeaderAboutPost'
import { AboutPostContainer } from './styles'

export interface PostState {
  title: string
  user: { login: string }
  created_at: string
  comments: string
  url: string
  body: string
}

export function AboutPost() {
  const [post, setPost] = useState({} as PostState)
  const { number } = useParams()

  const fetchPost = useCallback(async () => {
    const ENDPOIND = `repos/${USER}/${REPOSITORY}/issues/${number}`
    const response = await api.get(ENDPOIND)
    setPost(response.data)
  }, [number])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  if (!post.title) return <h1>loading</h1>

  return (
    <AboutPostContainer>
      <HeaderAboutPost postHeader={post} />
      <DescriptionPost body={post.body} />
    </AboutPostContainer>
  )
}
