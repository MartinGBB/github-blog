import styled from "styled-components";

export const ProfileContainer = styled.div`
background: ${props => props.theme["base-profile"]};
border-radius: 10px;
padding: 2rem 2.5rem 2rem 2rem;
display: flex;
gap: 2rem;

img {
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  
}
`
export const AboutProfile = styled.div`
  width: 100%;
  padding-top: 8px;

  div:first-child {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
