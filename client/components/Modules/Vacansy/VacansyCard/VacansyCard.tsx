
'use client'
import React, { useState } from 'react'
import cl from './Vacansy.module.css'
import { BaseCard } from '@/components/UI/BaseCard/BaseCard'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Menegment/store/Redux-global';
import Modal from '@/components/UI/Modal/Modal';
import { BaseInput } from '@/components/UI/BaseInput/BaseInput';
import { MainButton } from '@/components/UI/MainButton/MainButton';
import { deleteVacansy } from '@/Menegment/store/Fethers/VacansySlice';
import { useRouter } from 'next/navigation';

export const VacansyCard: React.FC<any> = (props) => {
    const { vacansy_name, description, skills, salary, city, experience, isAdmin, id } = props;
    const [visibleModal, setVisibleModal] = useState(false);
    const [isEdition, setIsEdition] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const getFormatSum = (sum: any) => {
        if (sum.length > 0) {
            return sum.toString()
                .split("")
                .reverse()
                .join("")
                .match(/.{1,3}/g)
                .map(function (item: any) {
                    return item.split("").reverse().join("");
                })
                .reverse()
                .join(" ")
        }
        else {
            return "Не указана"
        }
    }

    return (
        <div className={cl.container} >
            <div onClick={() => router.push(`/vacansy/${id}`)}>
                <BaseCard >
                    <div className={cl.title_container}><p className={cl.title}>{vacansy_name}</p><p className={cl.salary}>{salary}</p></div>
                    <p className={cl.description}>{description}</p>
                    <div className={cl.skils}><p className={cl.city}>{city}</p>{skills.split(/,|;/).slice(0, 2).map((el: any, i: any) =>
                        <p className={cl.skill} style={i == 0 ? { background: `rgba(39, 248, 35, 0.30)` } : { background: `rgba(35, 248, 248, 0.30)` }} key={i}>{el}</p >)}
                        <p className={cl.experience}>{experience}</p>
                    </div>

                </BaseCard >
            </div>
            {isAdmin ?
                <div className={cl.nav_btns}>
                    <button className={cl.deleteBtn} onClick={() => { setIsEdition(false); setVisibleModal(true) }}><img src='/imgs/icons/icons8-delete-100.png' alt='deletebtn' /></button>
                    <button onClick={() => { setIsEdition(true); setVisibleModal(true) }} className={cl.deleteBtn}><img alt='e' src='/imgs/icons/free-icon-edit-button-6324968.png' /></button>
                </div>
                : <div></div>}
            {isAdmin ? <Modal visible={visibleModal} setVisible={setVisibleModal} >
                <div className={cl.modalContent}>
                    {!isEdition ? <div>Вы уверены что хотите удалить вакнсию {vacansy_name}? <br />
                        <div className={cl.navbtns}>
                            <button className={cl.modal_navbtn} onClick={() => {
                                dispatch(deleteVacansy(id));
                                setVisibleModal(false);
                            }}>Да</button><button className={cl.modal_navbtn} onClick={() => setVisibleModal(false)}>Нет</button></div> </div>
                        :
                        <div>
                            {/* <form onSubmit={(e) => {
                                e.preventDefault(); dispatch(changeCategory({ id: id, category_name: categoryName, description: categoryDesc }));
                                setTimeout(() => dispatch(getAllCategory()), 1000); setVisibleModal(false);
                            }}>
                                <BaseInput type='text' placeholder='Название категории' value={categoryName} onChange={setCategoryName} isDark={true} />
                                <BaseInput type='text' placeholder='Описание' value={categoryDesc} onChange={setCategoryDesc} isDark={true} />
                                <MainButton style={{ margin: '30px 0' }} type="submit" buttonText='Изменить категорию' disabled={categoryName.length < 1 ? true : false}></MainButton>
                            </form> */}</div>
                    }
                </div>
            </Modal> : <div></div>}
        </div >
    )
}
