import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import { Container, Header } from '@/styles/pages/app'

import logo from '../assets/logo.svg'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Container>
      <Header>
        <Image src={logo} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
