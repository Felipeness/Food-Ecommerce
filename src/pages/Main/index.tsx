import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        {/* sub página */}
      </section>
    </Container>
  )
}
