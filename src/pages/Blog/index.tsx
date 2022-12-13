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
  const [issues, setIssues] = useState<IssueType[]>([])

  const fetchIssues = useCallback(async () => {
    try {
      const response = await api.get(
        `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues`,
      )
      const data = await response.data
      setIssues(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchSearchedIssues = useCallback(async (query: string) => {
    try {
      const response = await api.get(
        `search/issues?q=${query}%20repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      )
      const data = await response.data

      if (data.total_count === 0) {
        alert('No issues was found with this name, try again!')
        return
      }

      setIssues(data.items)
    } catch (error: any) {
      alert(error.message)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContainer>
      <Profile />

      <SearchForm
        onSubmitHandler={fetchSearchedIssues}
        issuesAmount={issues.length}
      />

      <PostListContainer>
        {issues.length
          ? issues.map((issue) => <PostCard key={issue.id} issue={issue} />)
          : null}
      </PostListContainer>
    </BlogContainer>
  )
}
