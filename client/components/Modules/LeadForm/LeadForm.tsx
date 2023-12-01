"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BaseInput } from '@/components/UI/BaseInput/BaseInput'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import cl from './LeadForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/Menegment/store/Redux-global'
import { Loader } from '@/components/UI/loader/Loader'
import { sendAnonymResponse } from '@/Menegment/store/Fethers/ResponseSlice'
import Modal from '@/components/UI/Modal/Modal'

export const LeadForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profName, setProfName] = useState('');
    const [message, setMessage] = useState('');
    const [resume, setResume] = useState<File>();
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const { isLoading, error, responseStatus } = useSelector<any, any>(state => state.response);
    const changeFile = (filelist: any) => {
        if (filelist) {
            console.log(filelist[0]);

            setResume(filelist[0])
            console.log(resume);

        }
    }
    const onSendForm = () => {
        dispatch(sendAnonymResponse({ user_name: name, user_phone: phone.replace(/\D/g, ''), user_email: email, resume, vacansy_name: profName, message, }));

        setName('');
        setPhone('');
        setEmail('');
        setProfName('');
        setMessage('');
        setResume(undefined);

    }
    useEffect(() => {
        console.log(error);

        if (error || isLoading || responseStatus) {
            setVisible(true)
        }
    }, [error, isLoading, responseStatus])

    return (<div className={cl.wrapper}>
        <div className={cl.container}>
            <div className={cl.left}>
                <p className={cl.title}>Не видишь свою вакансию?</p>
                <p className={cl.text}>Оставь свои данные и резюме, и мы свяжемся с тобой, когда найдем что-то подходящее под твое резюме</p>
                <BaseInput placeholder='Введите ФИО' type="text" isDark={true} value={name} onChange={setName} />
                <BaseInput placeholder='Ваш номер телефона' type="phone" isDark={true} value={phone} onChange={setPhone} />
                <BaseInput placeholder='Ваш e-mail' type="text" isDark={true} value={email} onChange={setEmail} />
                <BaseInput placeholder='Название профессии' type="text" isDark={true} value={profName} onChange={setProfName} />
                <textarea className={cl.textarea} placeholder='Сообщение (необязательно)' value={message} onChange={(e) => setMessage(e.target.value)} />
                <div className={cl.btns}>
                    <MainButton buttonText='Отправить' onClick={onSendForm} disabled={name.length > 0 && phone.length > 21 && email.length > 0 && profName.length > 0 ? false : true} />
                    <label className={cl.input_file}>
                        <input type='file' placeholder='Загрузить резюме' onChange={(e) => changeFile(e.target.files)} />
                        <span>Загрузить резюме</span>
                    </label>

                </div>
                <div className={cl.file_name}>{resume?.name}</div>
            </div>
            <div><Image src="/imgs/icons/Group.png" alt="leadForm" width={640} height={430} /></div>
        </div>
        {isLoading ? <Modal visible={visible} setVisible={setVisible}><Loader /></Modal>
            : error ? <Modal visible={visible} setVisible={setVisible}> <p className={cl.error}>{error}</p></Modal>
                : responseStatus ? <Modal visible={visible} setVisible={setVisible}><p className={cl.success}>{responseStatus}</p></Modal> : <div></div>}
    </div>)
}
