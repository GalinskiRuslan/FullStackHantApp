import Head from 'next/head'
import React, { createContext } from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {


    return (<>

        <Head>
            <title>MY Vacansy site</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>Nav</header>
        <main className='container'>
            {children}
        </main>
    </>
    )
}
