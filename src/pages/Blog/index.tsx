import { useCallback, useEffect, useState } from 'react'
import { GITHUB_REPOSITORY, GITHUB_USERNAME } from '../../constants/constants'
import { api } from '../../lib/api'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostListContainer } from './styles'

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

  const fetchIssues = useCallback(async () => {
    try {
      const response = await api.get(
        `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues`,
      )
      const data = await response.data
      setAllIssues(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContainer>
      <Profile />

      <SearchForm />

      <PostListContainer>
        {allIssues.length
          ? allIssues.map((issue) => <PostCard key={issue.id} issue={issue} />)
          : null}
      </PostListContainer>
    </BlogContainer>
  )
}
