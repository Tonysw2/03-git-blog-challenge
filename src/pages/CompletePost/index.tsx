import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
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
import remarkGfm from 'remark-gfm'
import { GITHUB_USERNAME } from '../../constants/constants'
import { api } from '../../lib/api'
import { CompletePostContainer, CompletePostContent } from './styles'

interface PostType {
  html_url: string
  title: string
  body: string
  comments: number
  created_at: Date
  user: { login: string }
}

export function CompletePost() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const { issueNumber } = useParams()
  console.log(post)

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
            {post.user.login}
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
        {post ? (
          <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
            {post.body}
          </ReactMarkdown>
        ) : null}
      </CompletePostContent>
    </CompletePostContainer>
  )
}
