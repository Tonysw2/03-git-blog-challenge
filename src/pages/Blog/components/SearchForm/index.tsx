import { ChangeEvent, FormEvent, useState } from 'react'
import { api } from '../../../../lib/api'
import { SearhcFormContainer } from './styles'

interface SearchIssueParamsType {
  query: string
  userName: string
  repo: string
}

export function SearchForm() {
  const [query, setQuery] = useState('')
  const [searchedIssue, setSearchedIssue] = useState()

  async function fetchSearchedIssue(URLparams: SearchIssueParamsType) {
    try {
      const response = await api.get(
        `search/issues/q=${URLparams.query}%20repo:${URLparams.repo}/${URLparams.userName}`,
      )
      const data = response.data
      console.log(data)
      setSearchedIssue(data)
    } catch (error) {
      console.log(error)
    } finally {
      setQuery('')
    }
  }

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <SearhcFormContainer
      onSubmit={(event: FormEvent) => {
        event.preventDefault()

        fetchSearchedIssue({
          query,
          userName: 'Tonysw2',
          repo: '03-git-blog-challenge',
        })
      }}
    >
      <label htmlFor="search">
        Publicações <span>1 publicações</span>
      </label>

      <input
        id="search"
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchInputChange}
        value={query}
      />
    </SearhcFormContainer>
  )
}
