import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, CardContainer } from './styles'

export interface IssueType {
  title: string
  body: string
  created_at: string
  html_url: string
  id: number
  number: number
}

export function Blog() {
  const [allIssues, setAllIssues] = useState<IssueType[]>([])

  async function fetchIssues() {
    try {
      const response = await api.get(
        'repos/Tonysw2/03-git-blog-challenge/issues',
      )
      const data = await response.data
      setAllIssues(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <BlogContainer>
      <Profile />

      <SearchForm />

      <CardContainer>
        {allIssues.length
          ? allIssues.map((issue) => <PostCard key={issue.id} issue={issue} />)
          : null}
      </CardContainer>
    </BlogContainer>
  )
}
