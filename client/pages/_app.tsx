import { ProviderRedux } from '@/Menegment/store/ReduxProvider'
import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import type { AppProps } from 'next/app'
import React from 'react'
const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderRedux>
      <main className={lato.className} >
        <Component {...pageProps} />
      </main>
    </ProviderRedux>
  )
}
