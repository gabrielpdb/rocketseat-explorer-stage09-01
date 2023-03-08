import { Container, Links } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 1</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  )
}
