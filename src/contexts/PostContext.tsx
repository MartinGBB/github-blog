import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface PostData {
  Post: { login: string }
  title: string
  body: string
  created_at: string
  state: string
  number: number
  comments: number
  url: string
}

interface PostContextType {
  postList: PostData[]
  fetchPost: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export const USER = 'MartinGBB'
export const REPOSITORY = 'github-blog'

export function PostProvider({ children }: PostProviderProps) {
  const [postList, setPostList] = useState<PostData[]>([])

  async function fetchPost(query?: string) {
    const newQuery = query || '%20'
    const ENDPOINT = `search/issues?q=repo:${USER}/${REPOSITORY}${newQuery}`

    const response = await api.get(ENDPOINT)
    const data = response.data.items
      .map((post: PostData) => post)
      .filter((post: PostData) => post.state !== 'closed')

    setPostList(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContext.Provider value={{ postList, fetchPost }}>
      {children}
    </PostContext.Provider>
  )
}
