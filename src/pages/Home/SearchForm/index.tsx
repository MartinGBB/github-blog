import { ChangeEvent, useState } from 'react'
import { FormContainer } from './styles'

export function SearchForm() {
  const [search, setSearch] = useState('')

  function handleSearchPost(data: ChangeEvent<HTMLInputElement>) {
    setSearch(data.target.value)
  }
  console.log(search)

  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicaçoes</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchPost}
      />
    </FormContainer>
  )
}
