import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Links, Content } from './styles'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={'Excluir nota'} />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            debitis incidunt quam eligendi praesentium inventore error
            voluptatibus, rem corporis pariatur illum nostrum recusandae eum.
            Quod laboriosam obcaecati a voluptas repellendus.
          </p>

          <Section title={'Links úteis'}>
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </Links>
          </Section>
          <Section title={'Marcadores'}>
            <Tag title={'express'} />
            <Tag title={'node'} />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
