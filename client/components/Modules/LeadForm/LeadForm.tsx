"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BaseInput } from '@/components/UI/BaseInput/BaseInput'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import cl from './LeadForm.module.css'

export const LeadForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profName, setProfName] = useState('');
    const [message, setMessage] = useState('');
    return (<div className={cl.wrapper}>
        <div className={cl.container}>
            <div className={cl.left}>
                <p className={cl.title}>Не видишь свою вакансию?</p>
                <p className={cl.text}>Оставь свои данные и резюме, и мы свяжемся с тобой, когда найдем что-то подходящее под твое резюме</p>
                <BaseInput placeholder='Введите ФИО' type="text" isDark={true} value={name} onChange={setName} />
                <BaseInput placeholder='Ваш номер телефона' type="text" isDark={true} value={phone} onChange={setPhone} />
                <BaseInput placeholder='Ваш e-mail' type="text" isDark={true} value={email} onChange={setEmail} />
                <BaseInput placeholder='Название профессии' type="text" isDark={true} value={profName} onChange={setProfName} />
                <textarea className={cl.textarea} placeholder='Сообщение (необязательно)' value={message} onChange={(e) => setMessage(e.target.value)} />
                <div className={cl.btns}>
                    <MainButton buttonText='Отправить' />
                    <MainButton buttonText='Загрузить резюме' />
                </div>
            </div>
            <div><Image src="/imgs/icons/Group.png" alt="leadForm" width={640} height={430} /></div>
        </div>
    </div>)
}
