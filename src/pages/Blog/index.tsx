import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Card } from './Card'
import { Profile } from './Profile'
import { BlogContainer, CardContainer, SearhcFormContainer } from './styles'

export interface IssueType {
  title: string
  body: string
  created_at: string
  id: number
}

export function Blog() {
  const [allIssues, setAllIssues] = useState<IssueType[]>([])

  async function fetchIssues() {
    const response = await api.get(
      'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
    )
    const data = response.data
    console.log(data)
    setAllIssues(data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <BlogContainer>
      <Profile />

      <SearhcFormContainer>
        <label htmlFor="search">
          Publicações <span>{allIssues.length} publicações</span>
        </label>
        <input id="search" type="text" placeholder="Buscar conteúdo" />
      </SearhcFormContainer>

      <CardContainer>
        {allIssues.length
          ? allIssues.map((issue) => <Card key={issue.id} issue={issue} />)
          : null}
      </CardContainer>
    </BlogContainer>
  )
}
