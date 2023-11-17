"use client"
import React, { useEffect } from 'react'
import Layout from '../../layout'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCategory } from '@/Menegment/store/Fethers/CategorySlice'
import { AppDispatch } from '@/Menegment/store/Redux-global'
import { Loader } from '@/components/UI/loader/Loader'
import { CategoryCard } from '@/components/Component/Category/CategoryCard'
import { CategoryPage } from '@/components/Modules/CategoryPage/CategoryPage'



export default function Page() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    const { isAuth } = useSelector<any, any>(state => state.login);
    const { isLoading, error, category, oneCategory } = useSelector<any, any>(state => state.category);
    useEffect(() => {
        dispatch(getOneCategory({ id: Number(router.query.id) }));
    }, [isAuth]);
    if (isLoading) {
        return <Loader />
    }
    else {
        return (
            <Layout>
                <CategoryPage img={oneCategory?.imageSrc} title={oneCategory?.category_name} description={oneCategory?.description} />
            </Layout>
        )
    }
}
