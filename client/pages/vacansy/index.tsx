import React from 'react'
import cl from "../../styles/Vacansy.module.css"
import Layout from './layout'
import { TopContent } from '@/components/Modules/VacansyPage/TopContent/TopContent'
import { CategoryBlock } from '@/components/Modules/Category/CategoryBlock/Category'
import { VacansyBlock } from '@/components/Modules/Vacansy/VacansyBlock/VacansyBlock'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import { LeadForm } from '@/components/Modules/LeadForm/LeadForm'

export default function index() {
    return (
        <Layout>
            <TopContent />
            <div className={cl.container}>
                <p className={cl.title}>Выберите своё направление</p>
                <p className={cl.text}>Мы всегда ищем классных людей в команду, а именно сейчас нам нужны эти специалисты:</p>
                <div className={cl.category_block}>
                    <CategoryBlock />
                    <VacansyBlock lengthArray={3} />
                    <div className={cl.btn}>
                        <MainButton style={{ maxWidth: "300px" }} buttonText="Все вакансии" />
                    </div>
                </div>
            </div>
            <LeadForm />
        </Layout>
    )
}
