import React from 'react'
import cl from "../../styles/Vacansy.module.css"
import Layout from './layout'
import { TopContent } from '@/components/Modules/VacansyPage/TopContent/TopContent'

export default function index() {
    return (
        <Layout>
            <TopContent />
        </Layout>
    )
}
