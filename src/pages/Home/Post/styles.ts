import styled from "styled-components";

export const PostContainer = styled.div`
  max-height: 16.25rem;
  max-width: 26rem;
  border-radius: 10px;
  background: ${props => props.theme["base-post"]};
  padding: 2rem;
  margin-bottom: 2rem;
 
  @media (max-width: 890px) {
    margin: 0 auto;
    margin-bottom: 2rem;
    max-width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.125rem;
    gap: 1rem;
    
    h1 {
      font-size: 1.125rem;
      color: ${props => props.theme["base-title"]};
      overflow: hidden;
    }
    
    span {
      white-space: nowrap;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

   > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
`
