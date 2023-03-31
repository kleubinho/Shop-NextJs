import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles() //chamando a função de estilo global

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
