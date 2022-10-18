import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import logo from '../../../assets/Logo.svg'
import { AboutProfile, ProfileContainer } from './styles'
import { api } from '../../../lib/axios'
import { useEffect, useState } from 'react'

interface UserData {
  avatarUrl: string
  name: string
  bio: string
  htmlUrl: string

  login: string
  company: string
  followers: number
}

export function Profile() {
  const [userData, setUserData] = useState<UserData>()

  async function fetchUser() {
    const response = await api.get('users/MartinGBB')
    const {
      avatar_url: avatarUrl,
      name,
      bio,
      html_url: htmlUrl,
      login,
      company,
      followers,
    } = response.data

    const data: UserData = {
      avatarUrl,
      name,
      bio,
      htmlUrl,
      login,
      company,
      followers,
    }
    setUserData(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={userData?.avatarUrl} alt="" />

      <AboutProfile>
        <div>
          <h1>{userData?.name}</h1>

          <a href={userData?.htmlUrl}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p>{userData?.bio}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userData?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {userData?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
            {userData?.followers}
          </span>
        </div>
      </AboutProfile>
    </ProfileContainer>
  )
}
