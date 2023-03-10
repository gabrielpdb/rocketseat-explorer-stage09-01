import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Dal Bó</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
