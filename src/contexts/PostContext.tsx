import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'
import { VITE_ROPOSITORY, VITE_USER } from '../utils/envConfig'

interface PostData {
  Post: { login: string }
  title: string
  body: string
  created_at: string
  state: string
  number: number
  comments: number
  url: string
  pull_request: {}
}

interface PostContextType {
  postList: PostData[]
  fetchPost: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [postList, setPostList] = useState<PostData[]>([])

  const fetchPost = useCallback(async (query?: string) => {
    const newQuery = query || '%20'
    const ENDPOINT = `search/issues?q=${newQuery}%20repo:${VITE_USER}/${VITE_ROPOSITORY}`
    const response = await api.get(ENDPOINT)
    const data = response.data.items
      .map((post: PostData) => post)
      .filter((post: PostData) => !post.pull_request)

    setPostList(data)
  }, [])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContext.Provider value={{ postList, fetchPost }}>
      {children}
    </PostContext.Provider>
  )
}
