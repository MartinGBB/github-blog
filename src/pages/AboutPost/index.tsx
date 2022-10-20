import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { api } from '../../lib/axios'
import { VITE_ROPOSITORY, VITE_USER } from '../../utils/envConfig'
import { DescriptionPost } from './DescriptionPost'
import { HeaderAboutPost } from './HeaderAboutPost'
import { AboutPostContainer } from './styles'

export interface PostState {
  title: string
  user: { login: string }
  created_at: string
  comments: string
  html_url: string
  body: string
}

export function AboutPost() {
  const [post, setPost] = useState({} as PostState)
  const { number } = useParams()

  const fetchPost = useCallback(async () => {
    const ENDPOIND = `repos/${VITE_USER}/${VITE_ROPOSITORY}/issues/${number}`
    const response = await api.get(ENDPOIND)
    setPost(response.data)
  }, [number])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  if (!post.title) return <Loading />

  return (
    <AboutPostContainer>
      <HeaderAboutPost postHeader={post} />
      <DescriptionPost body={post.body} />
    </AboutPostContainer>
  )
}
