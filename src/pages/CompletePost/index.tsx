import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { CompletePostContainer, CompletePostContent } from './styles'

export function CompletePost() {
  const { user, post, fetchIssue } = useContext(UserContext)
  const { issueNumber } = useParams()

  useEffect(() => {
    fetchIssue(Number(issueNumber))
  }, [fetchIssue, issueNumber])

  return (
    <CompletePostContainer>
      <header>
        <div>
          <Link to="/">
            <CaretLeft size={12} weight="bold" />
            Voltar
          </Link>

          <a href={post?.html_url}>
            Ver no GitHub <ArrowSquareOut size={12} />
          </a>
        </div>

        <h1>{post?.title}</h1>

        <div>
          <p>
            <GithubLogo weight="fill" size={18} />
            {user.login}
          </p>

          <p>
            <Calendar weight="fill" size={18} />
            {post.created_at
              ? formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : null}
          </p>

          <p>
            <ChatCircle weight="fill" size={18} />
            {post?.comments} Comentários
          </p>
        </div>
      </header>

      <CompletePostContent>
        {post ? <ReactMarkdown>{post.body}</ReactMarkdown> : null}
      </CompletePostContent>
    </CompletePostContainer>
  )
}
