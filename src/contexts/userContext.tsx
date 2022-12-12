import { createContext, useCallback, useEffect, useState } from 'react'
import { ReactNode } from 'react-markdown/lib/react-markdown'
import { api } from '../lib/api'

interface UserType {
  login: string
  html_url: string
  avatar_url: string
  bio: string
  company: string
  name: string
  followers: string
}

interface PostType {
  html_url: string
  title: string
  body: string
  comments: number
  created_at: Date
}

interface UserContextType {
  user: UserType
  post: PostType
  fetchIssue: (issueumber: number) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'Tonysw2'

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType)
  const [post, setPost] = useState<PostType>({} as PostType)

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get(`users/${GITHUB_USERNAME}`)
      const data = await response.data

      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchIssue = useCallback(async (issueNumber: number) => {
    try {
      const response = await api.get(
        `repos/${GITHUB_USERNAME}/03-git-blog-challenge/issues/${issueNumber}`,
      )
      const data = await response.data
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, post, fetchIssue }}>
      {children}
    </UserContext.Provider>
  )
}
