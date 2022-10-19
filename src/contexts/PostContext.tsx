import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface PostData {
  Post: { login: string }
  title: string
  body: string
  updated_at: string
  state: string
  number: number
  comments: number
  url: string
}

interface PostContextType {
  postList: PostData[]
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

const USER = 'MartinGBB'
const REPOSITORY = 'github-blog'

export function PostProvider({ children }: PostProviderProps) {
  const [postList, setPostList] = useState<PostData[]>([])

  async function fetchPost() {
    const response = await api.get(`search/issues?q=repo:${USER}/${REPOSITORY}`)
    const data = response.data.items
      .map((post: PostData) => post)
      .filter((post: PostData) => post.state !== 'closed')

    setPostList(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContext.Provider value={{ postList }}>{children}</PostContext.Provider>
  )
}
