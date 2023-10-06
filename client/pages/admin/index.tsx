'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../_app';
import CategoryService from '@/services/Category';
import { observer } from "mobx-react-lite"
import Layout from './layout';

export default observer(function Admin() {
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    })
    if (store.isAuth == true) {
        return (
            <><button onClick={() => store.logout()}>Выйти</button>
                <div> Admin pannel</div>
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
                }}>123</button>

            </div>
        )
    }
})
