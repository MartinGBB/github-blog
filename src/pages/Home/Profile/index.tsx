import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { AboutProfile, ProfileContainer } from './styles'
import { UserDataProfile } from '..'

interface UserProps {
  user: UserDataProfile
}

export function Profile({ user }: UserProps) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />

      <AboutProfile>
        <div>
          <h1>{user.name}</h1>

          <a href={user.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p>{user.bio}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
            {user.followers}
          </span>
        </div>
      </AboutProfile>
    </ProfileContainer>
  )
}
