"use client"
import React, { useEffect, useState } from 'react'
import cl from './CategoryPage.module.css'
import { SearchInput } from '@/components/UI/SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/Menegment/store/Redux-global';
import { getOneCategory } from '@/Menegment/store/Fethers/CategorySlice';
import { Loader } from '@/components/UI/loader/Loader';
import { useRouter } from 'next/router'
import { getVacancyWithCat } from '@/Menegment/store/Fethers/VacansySlice';
import { VacansyCard } from '../../Vacansy/VacansyCard/VacansyCard';
import { LeadForm } from '../../LeadForm/LeadForm';

export const CategoryPage: React.FC<any> = (props) => {
    const router = useRouter()
    const { id } = router.query;
    const { isLoading, error, category, oneCategory } = useSelector<any, any>(state => state.category);
    const { user } = useSelector<any, any>(state => state.login);
    const { vacansyWithCat } = useSelector<any, any>(state => state.vacansy);
    const dispatch = useDispatch<AppDispatch>();
    const { isAuth } = useSelector<any, any>(state => state.login);
    useEffect(() => {
        if (id) {
            dispatch(getOneCategory({ id: Number(id) }));
            dispatch(getVacancyWithCat(String(id)));
        }
    }, [id]);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className={cl.container}>

            <div className={cl.top}>
                <div className={cl.back}></div>
                <img src={oneCategory?.imageSrc} alt='backgroundImg' className={cl.img} />
                <p className={cl.title}>{oneCategory?.category_name}</p>
                <p className={cl.description}>{oneCategory?.description}</p>
            </div>
            <div className={cl.secblock}>
                <h6 className={cl.subtitle}>
                    Вакансии для {oneCategory?.category_name}
                </h6>
                <p className={cl.text}>Мы всегда ищем классных людей в команду, а именно сейчас нам нужны эти специалисты:</p>
                <SearchInput />
            </div>
            <div className={cl.vacansy}>
                {vacansyWithCat.length > 0 ? vacansyWithCat.map((vacansy: any) => {
                    return <VacansyCard
                        key={vacansy.id}
                        vacansy_name={vacansy.vacansy_name}
                        description={vacansy.description}
                        skills={vacansy.skills} salary={vacansy.salary}
                        city={vacansy.city}
                        experience={vacansy.expresion}
                        isAdmin={user.user_role === 'admin' ? true : false}
                        id={vacansy.id} />
                }) : <div>Вакансий в этой категории нет</div>}
            </div>
            <LeadForm />
        </div>
    )
}
