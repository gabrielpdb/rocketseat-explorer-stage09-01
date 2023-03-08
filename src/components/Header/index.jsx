import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Dal Bó</strong>
        </div>
      </Profile>
    </Container>
  )
}
