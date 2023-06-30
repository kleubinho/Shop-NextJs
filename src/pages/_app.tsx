import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Handbag } from "@phosphor-icons/react";

globalStyles() //chamando a função de estilo global

import logoImg from '../assets/logo.svg'
import { BagHand, Container, Header } from '@/styles/pages/app'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <BagHand>
          <Handbag size={25} />
        </BagHand>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}