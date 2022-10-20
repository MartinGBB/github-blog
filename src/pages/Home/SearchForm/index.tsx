import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { PostContext } from '../../../contexts/PostContext'

import { FormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const { postList, fetchPost } = useContext(PostContext)

  async function handleSearchPost(data: SearchFormInputs) {
    await fetchPost(data.query)
  }

  const POST_QUANTITY = postList.length

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h2>Publicações</h2>
        <span>{`${POST_QUANTITY} publicações`}</span>
      </header>

      <input
        autoComplete="off"
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </FormContainer>
  )
}
