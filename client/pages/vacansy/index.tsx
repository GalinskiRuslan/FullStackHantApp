import React from 'react'
import cl from "../../styles/Vacansy.module.css"
import { TopContent } from '@/components/Modules/Vacansy/TopContent/TopContent'
import { CategoryBlock } from '@/components/Modules/Category/CategoryBlock/Category'
import { VacansyBlock } from '@/components/Modules/Vacansy/VacansyBlock/VacansyBlock'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import { LeadForm } from '@/components/Modules/LeadForm/LeadForm'
import Layout from './layout'


export default function index() {
    return (
        <Layout>
            <TopContent />
            <div className={cl.container}>
                <p className={cl.title}>Выберите своё направление</p>
                <p className={cl.text}>Мы всегда ищем классных людей в команду, а именно сейчас нам нужны эти специалисты:</p>
                <div className={cl.category_block}>
                    <CategoryBlock />
                    <VacansyBlock lengthArray={3} buttonAll={true} />
                </div>
            </div>
            <LeadForm />
        </Layout>
    )
}
