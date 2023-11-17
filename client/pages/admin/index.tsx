import React from 'react'
import Layout from './layout'
import cl from './adminStyle.module.css'
import { useRouter } from 'next/navigation';

export default function Admin() {
    const router = useRouter();
    if (typeof window !== "undefined") {
        if (localStorage.getItem('isAuth') !== "admin") {
            router.push('/')
        }
    }
    return (
        <Layout>
            <div className={cl.container} style={{ background: "#ccc", height: "100vh", paddingTop: "90px" }}>
                <p style={{ textAlign: 'center' }}>Добро пожаловать в админ панель! Здесь вы можете создавать, настраивать и удалять вакансии компании и просматривать отклики пользователей</p>
                <div className={cl.nav}>
                    <button onClick={() => router.push('/admin/Category')} className={cl.adminbtn}>Категории</button>
                    <button onClick={() => router.push('/admin/Vacansy')} className={cl.adminbtn}>Вакансии</button>
                    <button className={cl.adminbtn}>Отклики</button>
                </div>
            </div>
        </Layout>
    )
}


