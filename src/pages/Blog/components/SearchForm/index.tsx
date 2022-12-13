import { ChangeEvent, useState } from 'react'
import { SearhcFormContainer } from './styles'

interface SearchFormProps {
  issuesAmount: number
  onSubmitHandler: (query: string) => void
}

export function SearchForm({ onSubmitHandler, issuesAmount }: SearchFormProps) {
  const [query, setQuery] = useState('')

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <SearhcFormContainer
      onSubmit={(e) => {
        e.preventDefault()
        onSubmitHandler(query)
        setQuery('')
      }}
    >
      <label htmlFor="search">
        Publicações <span>{issuesAmount} publicações</span>
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
