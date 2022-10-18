import styled from 'styled-components'
import banner from '../../assets/Banner.svg'

export const HeaderContainer = styled.div`
  margin: 0;
  height: 18.5rem;
  background: url(${banner}) no-repeat center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-size: cover;

  img {
    padding: 4rem;
  }
`
