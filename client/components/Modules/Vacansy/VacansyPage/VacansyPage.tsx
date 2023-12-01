import { SearchInput } from '@/components/UI/SearchInput/SearchInput'
import React from 'react'
import { VacansyBlock } from '../VacansyBlock/VacansyBlock'
import cl from './VacansyPage.module.css'

export const VacansyPage = () => {
  return (
    <div className={cl.container}>
      <h3 className={cl.title}>Все вакансии в FinTechPro</h3>
      <p className={cl.text}>Мы всегда ищем классных людей в команду, а именно сейчас нам нужны эти специалисты:</p>
      <SearchInput />
      <VacansyBlock />
    </div>
  )
}
