import React from 'react'
import Layout from '../layout'
import { useRouter } from 'next/navigation';
import { CategoryBlock } from '@/components/Modules/CategoryBlock/Category';
import cl from './CategoryList.module.css'


export default function Category() {
    const router = useRouter();
    if (typeof window !== "undefined") {
        if (localStorage.getItem('isAuth') !== "admin") {
            router.push('/')
        }
    }
    return (
        <Layout>
            <div>
                <div className={cl.topcont}></div>
                <p className={cl.title}>Категории:</p>
                <CategoryBlock />
            </div>
        </Layout>
    )
}

