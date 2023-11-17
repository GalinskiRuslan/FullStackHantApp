import React from 'react'
import cl from "./TopContent.module.css"
import { SearchInput } from '@/components/UI/SearchInput/SearchInput'

export const TopContent = () => {
    return (
        <div className={cl.container}>
            <div className={cl.topcont}>
                <p className={cl.title}>В а к а н с и и</p>
                <p className={cl.subtitle}>Начни свою карьеру в компании FinTechPro!</p>
                <div className={cl.searchcontainer}>
                    <input type='text' className={cl.input} placeholder='Поиск по вакансиям...' />
                    <svg className={cl.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16 16L11.3333 11.3333M2 7.44444C2 8.15942 2.14082 8.86739 2.41443 9.52794C2.68804 10.1885 3.08908 10.7887 3.59464 11.2942C4.1002 11.7998 4.7004 12.2008 5.36095 12.4745C6.0215 12.7481 6.72947 12.8889 7.44444 12.8889C8.15942 12.8889 8.86739 12.7481 9.52794 12.4745C10.1885 12.2008 10.7887 11.7998 11.2942 11.2942C11.7998 10.7887 12.2008 10.1885 12.4745 9.52794C12.7481 8.86739 12.8889 8.15942 12.8889 7.44444C12.8889 6.72947 12.7481 6.0215 12.4745 5.36095C12.2008 4.7004 11.7998 4.1002 11.2942 3.59464C10.7887 3.08908 10.1885 2.68804 9.52794 2.41443C8.86739 2.14082 8.15942 2 7.44444 2C6.72947 2 6.0215 2.14082 5.36095 2.41443C4.7004 2.68804 4.1002 3.08908 3.59464 3.59464C3.08908 4.1002 2.68804 4.7004 2.41443 5.36095C2.14082 6.0215 2 6.72947 2 7.44444Z" stroke="black" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button className={cl.btn}>Поиск</button>
                </div>
            </div>
            <img className={cl.topcont_img} src="/imgs/icons/business-team-manager-meeting.png" alt="vacansy" />

        </div>
    )
}
