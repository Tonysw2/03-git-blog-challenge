import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/api'

export interface IssueType {
  title: string
  body: string
  created_at: string
  html_url: string
  id: number
  number: number
}

interface IssueContextType {
  allIssues: IssueType[]
}

interface IssuaContextProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueContextPovider({ children }: IssuaContextProviderProps) {
  const [allIssues, setAllIssues] = useState<IssueType[]>([])
  console.log(allIssues)

  async function fetchIssues() {
    try {
      const response = await api.get(
        'repos/Tonysw2/03-git-blog-challenge/issues',
      )
      const data = response.data
      setAllIssues(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={{ allIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
