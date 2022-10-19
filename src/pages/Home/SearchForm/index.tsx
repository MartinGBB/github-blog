import { ChangeEvent, useContext, useState } from 'react'
import { PostContext } from '../../../contexts/PostContext'
import { FormContainer } from './styles'

export function SearchForm() {
  const [search, setSearch] = useState('')

  const { postList } = useContext(PostContext)

  function handleSearchPost(data: ChangeEvent<HTMLInputElement>) {
    setSearch(data.target.value)
  }
  console.log(search)

  const POST_QUANTITY = postList.length

  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>{`${POST_QUANTITY} publicaçoes`}</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchPost}
      />
    </FormContainer>
  )
}
