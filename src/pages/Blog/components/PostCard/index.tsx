import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'
import { IssueType } from '../..'
import { CardWrap } from './styles'

interface CardProps {
  issue: IssueType
}

export function PostCard({ issue }: CardProps) {
  const navigate = useNavigate()

  function goTo() {
    navigate(`post/${issue.number}`)
  }

  return (
    <CardWrap onClick={goTo}>
      <div>
        <h1>{issue.title}</h1>
        <p>
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </div>

      <p>{issue.body}</p>
    </CardWrap>
  )
}
