import { Profile } from "./Profile"
import { SearchForm } from "./SearchForm"
import { HomeContainer } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      {/* 
      {
        [].map((post) => {
          <Posts post={post} />
        })
      } */}
    </HomeContainer>
  )
}