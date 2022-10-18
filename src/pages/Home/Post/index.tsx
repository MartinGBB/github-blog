import { PostContainer } from "./styles";

interface PostProps {
  post: {
    title: string;
    date: string;
    paragraph: string;
    id: number;
  }
}

export function Post({ post }: PostProps) {
  const { title, date, paragraph, id } = post

  return (
    <PostContainer to={`/${id}`}>
      <header>
        <h1>{title}</h1>
        <span>{date}</span>
      </header>

      <p>{paragraph}</p>
    </PostContainer>
  )
}