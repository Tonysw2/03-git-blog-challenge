import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'
import { GITHUB_USERNAME } from '../../../../constants/constants'
import { api } from '../../../../lib/api'
import { Avatar, ProfileContainer, ProfileInformationContainer } from './styles'

interface UserType {
  login: string
  html_url: string
  avatar_url: string
  bio: string
  company: string
  name: string
  followers: string
}

export function Profile() {
  const [user, setUser] = useState<UserType>({} as UserType)

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get(`users/${GITHUB_USERNAME}`)
      const data = await response.data

      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <Avatar>
        <img src={user.avatar_url} alt="" />
      </Avatar>

      <ProfileInformationContainer>
        <header>
          <p>{user.name}</p>

          <a href={user.html_url} target="_blank" rel="noreferrer">
            github
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>

        <p>{user.bio}</p>

        <div>
          <p>
            <span>
              <GithubLogo size={18} weight="fill" />
            </span>
            {user.login}
          </p>

          <p>
            <span>
              <Buildings size={18} weight="fill" />
            </span>
            {user.company !== null ? user.company : 'Ignite Rocketseat'}
          </p>

          <p>
            <span>
              <Users size={18} weight="fill" />
            </span>
            {user.followers} seguidores
          </p>
        </div>
      </ProfileInformationContainer>
    </ProfileContainer>
  )
}
