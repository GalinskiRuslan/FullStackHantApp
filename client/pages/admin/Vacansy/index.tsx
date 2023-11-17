import React from 'react'
import Layout from '../layout'
import { VacansyBlock } from '@/components/Modules/Vacansy/Vacansy'
import { useRouter } from 'next/navigation';


export default function Vacansy() {
    const router = useRouter();
    if (typeof window !== "undefined") {
        if (localStorage.getItem('isAuth') !== "admin") {
            router.push('/')
        }
    }
    return (
        <Layout>
            <div style={{ background: "#ccc", height: "100vh", paddingTop: "90px" }}>
                <p style={{ textAlign: 'center' }}>ВАКАНСИИ:</p>
                <VacansyBlock />
            </div>
        </Layout>
    )
}

