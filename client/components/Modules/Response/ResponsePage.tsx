'use client'
import { deleteResponse, getAllResponse } from '@/Menegment/store/Fethers/ResponseSlice';
import { AppDispatch } from '@/Menegment/store/Redux-global';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from "./ResponsePage.module.css"
import dayjs from 'dayjs';
import Modal from '@/components/UI/Modal/Modal';

export const ResponsePage = () => {
    const { responses } = useSelector<any, any>(state => state.response)
    const dispatch = useDispatch<AppDispatch>();
    const [visible, setVisible] = useState(false)
    const [deleteItem, setDeleteItem] = useState(-1)
    useEffect(() => {
        dispatch(getAllResponse())
    }, [])
    return (<>
        <div className={cl.container}>
            <h4>Отклики на сайте:</h4>
            <div className={cl.item}><p>№</p>
                <p>Имя соискателя:</p>
                <p>номер телефона:</p>
                <p>Название вакансии</p>
                <a>Резюме</a>
                <p>Дата отклика</p>
                <p>Удалить отклик</p>
            </div>
            {responses.map((item: any, index: number) => (<div className={cl.item} key={index}>

                <p>{item.id}</p>
                <p>{item.user_name}</p>
                <p>{item.user_phone}</p>
                <p>{item.vacancy_name}</p>
                {item.resume ? <a href={item.resume}>Резюме</a> : <p></p>}
                <p>{dayjs(item.data_time).format("DD.MM.YYYY")}</p>
                <button onClick={() => { setDeleteItem(item.id); setVisible(true); }}>X</button>
            </div>))}
        </div>
        <Modal visible={visible} setVisible={setVisible}>Хотите удалить отклик № {deleteItem}
            <button onClick={() => { dispatch(deleteResponse(deleteItem)); setDeleteItem(-1); setVisible(false); }}>Да!</button><button onClick={() => { setDeleteItem(-1); setVisible(false); }}>Нет</button>
        </Modal >
    </>)
}
