import { Post } from "./Post"
import { Profile } from "./Profile"
import { SearchForm } from "./SearchForm"
import { HomeContainer, PostsContent } from "./styles"

export function Home() {
const obj = [
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "Há 1 dia",
    paragraph: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "Há 1 dia",
    paragraph: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "Há 1 dia",
    paragraph: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
  {
    id: 1,
    title: "JavaScript data types and data structures",
    date: "Há 1 dia",
    paragraph: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
    {
    id: 1,
    title: "JavaScript data types and data structuresaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "Há 1 dia",
    paragraph: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
  },
]

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      
      <PostsContent>
        {
          obj.map((data) => (
            <Post key={data.title} post={data} />
            ))
        }
      </PostsContent>
    </HomeContainer>
  )
}