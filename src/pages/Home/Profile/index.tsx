import { AboutProfile, ProfileContainer } from "./styles"
import logo from '../../../assets/Logo.svg'
import { Link } from "react-router-dom"

export function Profile() {
  return (
    <ProfileContainer>
      <img src={logo} alt="" />
      <AboutProfile>
        <div>
          <h1>Cameron Williamson</h1>
          <Link to="/">GITHUB</Link>
        </div>
      </AboutProfile>
    </ProfileContainer>
  )
}