import { useContext } from 'react'
import { IssueContext } from '../../contexts/issuesContext'
import { Card } from './Card'
import { Profile } from './Profile'
import { BlogContainer, CardContainer, SearhcFormContainer } from './styles'

export function Blog() {
  const { allIssues } = useContext(IssueContext)

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
