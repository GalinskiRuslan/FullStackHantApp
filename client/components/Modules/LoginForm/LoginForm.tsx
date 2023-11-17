"use client"
import React, { useEffect, useState } from 'react'
import cl from './LoginForm.module.css'
import { BaseInput } from '@/components/UI/BaseInput/BaseInput'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginFech } from '@/Menegment/store/Fethers/LoginSlice';
import { Loader } from '@/components/UI/loader/Loader'
import { AppDispatch } from '@/Menegment/store/Redux-global'
import { useRouter } from 'next/router'

export const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLoading, loginError, isAuth, user } = useSelector<any, any>(state => state.login);
    const router = useRouter();


    const getError = () => {
        if (loginError?.response?.data) {
            return <p className={cl.error}>{loginError.response.data}</p>
        }
        else {
            return null
        }
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); dispatch(loginFech({ user_email: email, password: password })); router.push('/admin') }} className={cl.form}>
                    <BaseInput type='text' placeholder='Введите email' value={email} onChange={setEmail} isDark={true} />
                    <BaseInput type='text' placeholder='Введите пароль' value={password} onChange={setPassword} isDark={true} />
                    <MainButton type="submit" buttonText='Войти' disabled={email.length > 0 && password.length > 0 ? false : true} />
                </form>
                {getError()}
            </div >
        )
    }
}
