'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../_app';
import { observer } from "mobx-react-lite"
import Layout from './layout';
import cl from './adminStyle.module.css'
import { Tabs } from '@/components/Tabs/Tabs';
import { CategoryBlock } from '@/components/Category/Category';
import { VacansyBlock } from '@/components/Vacansy/Vacansy';


export default observer(function Admin() {
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [store])
    if (store.isAuth == true) {
        return (
            <>
                <Layout><button onClick={() => store.logout()}>Выйти</button>
                    {/* <div className={cl.tabsContainer}>
                        <div className={activeTabs == 1 ? cl.activeTabs : cl.tabs}>
                            <p className={cl.title}>Вакансии: </p>
                            
                            <button onClick={() => openNewVacansy()}>Добавить Вакансию</button>
                        </div>

                        <div className={cl.nav}><button onClick={() => { setActiveTabs(0) }}>Категории</button><button onClick={() => { setActiveTabs(1) }}>Вакансии</button></div>
                    </div> */}
                </Layout >
                <Tabs items={[{
                    title: "Категории", content: <CategoryBlock />, buttonName: "Категории"
                }, { title: "Вакансии", content: <VacansyBlock />, buttonName: "Вакансии" }, { title: "Eshe cto-to", content: "Some content3", buttonName: "some cont3F" }]}></Tabs>

            </>
        )
    }
    else {
        return (
            <div>

                <form>
                    <h3>Вход для администаторов</h3>
                    <input type="text" name='user_email' placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} value={user_email} />
                    <input type="password" name='password' placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password} />
                </form>
                {store.isAuth ? <h1>Авторизован</h1> : <h1>Не авторизован</h1>}
                <button onClick={() => {
                    store.login(user_email, password); console.log(store.isAuth);
                }}>Войти</button>

            </div>
        )
    }
})
