import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { IssueType } from '../../contexts/issuesContext'
import { api } from '../../lib/api'
import { CompletePostContainer, CompletePostContent } from './styles'

export function CompletePost() {
  const [post, setPost] = useState<IssueType>()
  const { issueNumber } = useParams()

  const fetchIssue = useCallback(async (issueNumber: number) => {
    try {
      const response = await api.get(
        `repos/Tonysw2/03-git-blog-challenge/issues/${issueNumber}`,
      )
      const data = await response.data
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

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
            cameronwll
          </p>

          <p>
            <Calendar weight="fill" size={18} />
            Há 1 dia
          </p>

          <p>
            <ChatCircle weight="fill" size={18} />5 Comentários
          </p>
        </div>
      </header>

      <CompletePostContent>
        {post ? <ReactMarkdown>{post.body}</ReactMarkdown> : null}
      </CompletePostContent>
    </CompletePostContainer>
  )
}
