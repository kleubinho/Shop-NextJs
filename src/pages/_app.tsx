import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles() //chamando a função de estilo global

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
