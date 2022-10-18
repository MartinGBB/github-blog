import { AboutProfile, ProfileContainer } from "./styles"
import logo from '../../../assets/Logo.svg'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export function Profile() {
  return (
    <ProfileContainer>
      <img src={logo} alt="" />
  
      <AboutProfile>
        <div>
          <h1>Cameron Williamson</h1>
          <Link to="/">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
  
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <div>
          <span><FontAwesomeIcon icon={faGithub} /> cameronwll</span>
          <span><FontAwesomeIcon icon={faBuilding} /> Rocketseat</span>
          <span><FontAwesomeIcon icon={faUser} /> 32 seguidores</span>
        </div>
      </AboutProfile>
    </ProfileContainer>
  )
}