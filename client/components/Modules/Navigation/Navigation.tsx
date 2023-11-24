"use client"
import React, { useEffect } from 'react'
import cl from './Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/UI/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '@/Menegment/store/Fethers/LoginSlice'
import { AppDispatch } from '@/Menegment/store/Redux-global'
import { useRouter } from 'next/navigation'


export const Navigation = () => {
    const [visible, setVisible] = React.useState<any>(null)
    const [visibleModal, setVisibleModal] = React.useState(false)
    const [visibleSub, setVisibleSub] = React.useState(false)
    const { isLoading, error, isAuth, user } = useSelector<any, any>(state => state.login);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const openSub = () => {
        setVisibleSub(!visibleSub)
    }
    useEffect(() => {
        dispatch(checkIsAuth())
    }, [])
    useEffect(() => {
        if (isAuth) {
            setVisibleModal(false)
        }
    }, [isAuth])

    const changeMenuState = () => {
        if (visible === null) {
            setVisible(true)
        }
        else if (visible === true) {
            {
                setVisible(false)
            }
        }
        else {
            setVisible(true)
        }
    }

    return (
        <div className={cl.container}>
            <div className={cl.logo}>
                <Link href='/'><Image width={169} height={58} alt='main-logo' src='/imgs/icons/серый лого прозрачный (3) 1.png' /></Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <nav className={visible === null ? cl.nav_start : visible === true ? cl.active + ' ' + cl.nav : cl.nav}>
                    <ul className={cl.nav_list}>
                        <li><Link className={cl.nav_link_about} href='/#about'></Link></li>
                        <li><Link className={cl.nav_link_company} href='/companylive'></Link></li>
                        <li><Link className={cl.nav_link_vacansy} href='/vacansy'></Link></li>
                        <li><Link className={cl.nav_link_contact} href='/contact'></Link></li>
                        <button onClick={() => { !isAuth ? setVisibleModal(true) : openSub() }} className={cl.login_btn}><Image width={50} height={50} alt='user' src='/imgs/icons/icons8-пользователь-100.png' /></button>
                        <div className={visibleSub ? cl.subMenu_user + ' ' + cl.active : cl.subMenu_user}>
                            <button className={cl.logoutbtn} >Кабинет</button><br />
                            {user.user_role == 'admin' ? <button className={cl.logoutbtn} onClick={() => router.push('/')}>Админ панель</button> : <button className={cl.logoutbtn} >Что то ещё</button>}<br />
                            <button className={cl.logoutbtn} onClick={() => { dispatch(logout()); setVisibleSub(false); router.push('/') }}>Выйти</button>
                        </div>
                    </ul>
                </nav>

                <button className={visible ? cl.active + ' ' + cl.nav_btn : cl.nav_btn} onClick={() => { changeMenuState() }}>
                    <div className={cl.nav_btn_centerline}></div>
                    <svg className={cl.nav_btn_svg} xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" fill="none">
                        <path d="M31.25 1.87639C28.6201 0.35801 25.3799 0.358009 22.75 1.87639L4.76924 12.2576C2.13933 13.776 0.519238 16.582 0.519238 19.6188V40.3812C0.519238 43.418 2.13933 46.224 4.76924 47.7424L22.75 58.1236C25.3799 59.642 28.6201 59.642 31.25 58.1236L49.2308 47.7424C51.8607 46.224 53.4808 43.418 53.4808 40.3812V19.6188C53.4808 16.582 51.8607 13.776 49.2308 12.2576L31.25 1.87639Z" stroke="white" />
                    </svg>
                </button>
            </div>
            <Modal visible={visibleModal} setVisible={setVisibleModal}><LoginForm /></Modal>
        </div >
    )
}
