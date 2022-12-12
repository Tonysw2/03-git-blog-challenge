import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/userContext'
import { Avatar, ProfileContainer, ProfileInformationContainer } from './styles'

export function Profile() {
  const { user } = useContext(UserContext)

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
