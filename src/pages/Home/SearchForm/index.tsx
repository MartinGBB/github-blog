import { FormContainer } from "./styles";

export function SearchForm() {
  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicaçoes</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
      />
    </FormContainer>
  )
}