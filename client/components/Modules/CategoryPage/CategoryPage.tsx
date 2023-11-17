import React from 'react'
import cl from './CategoryPage.module.css'
import { SearchInput } from '@/components/UI/SearchInput/SearchInput';

export const CategoryPage: React.FC<any> = (props) => {
    const { img, title, description = '', link = '' } = props;
    return (
        <div className={cl.container}>

            <div className={cl.top}>
                <div className={cl.back}></div>
                <img src={img} alt='backgroundImg' className={cl.img} />
                <p className={cl.title}>{title}</p>
                <p className={cl.description}>{description}</p>
            </div>
            <div className={cl.secblock}>
                <h6 className={cl.subtitle}>
                    Вакансии для {title}
                </h6>
                <p className={cl.text}>Мы всегда ищем классных людей в команду, а именно сейчас нам нужны эти специалисты:</p>
                <SearchInput />
            </div>
        </div>
    )
}
