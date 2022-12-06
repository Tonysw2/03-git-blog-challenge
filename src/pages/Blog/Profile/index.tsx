import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/api'
import { Avatar, ProfileContainer, ProfileInformationContainer } from './styles'

interface UserDataType {
  login: string
  url: string
  avatar_url: string
  bio: string
  company: string
  name: string
  followers: string
}

export function Profile() {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType)

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/diego3g')
    const data = await response.data

    setUserData(data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <Avatar>
        <img src={userData.avatar_url} alt="" />
      </Avatar>

      <ProfileInformationContainer>
        <header>
          <p>{userData.name}</p>

          <a href={userData.url}>
            github
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>

        <p>{userData.bio}</p>

        <div>
          <p>
            <span>
              <GithubLogo size={18} weight="fill" />
            </span>
            {userData.login}
          </p>

          <p>
            <span>
              <Buildings size={18} weight="fill" />
            </span>
            {userData.company}
          </p>

          <p>
            <span>
              <Users size={18} weight="fill" />
            </span>
            {userData.followers} seguidores
          </p>
        </div>
      </ProfileInformationContainer>
    </ProfileContainer>
  )
}
