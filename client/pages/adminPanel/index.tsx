import React from 'react'
import Layout from '../layout'
import { ResponsePage } from '@/components/Modules/Response/ResponsePage'

export default function AdminPanel() {
    return (
        <Layout>
            <div style={{ background: "#044cb3", width: "100vw", height: "100vh", padding: "90px 0" }}><ResponsePage /></div>

        </Layout>
    )
}
