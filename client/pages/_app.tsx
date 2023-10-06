import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext } from 'react'
const store = new Store();
import Store from "../store/store";

export const Context = createContext({ store })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={{ store }}>
      <Component {...pageProps} />
    </Context.Provider>)
}
