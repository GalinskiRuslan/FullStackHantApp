'use client'
import React, { useEffect, useState } from 'react'
import cl from "./Category.module.css"
import { useRouter } from 'next/navigation';
import Modal from '@/components/UI/Modal/Modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Menegment/store/Redux-global';
import { changeCategory, deleteCategory, getAllCategory } from '@/Menegment/store/Fethers/CategorySlice';
import { BaseInput } from '@/components/UI/BaseInput/BaseInput';
import { MainButton } from '@/components/UI/MainButton/MainButton';


export const CategoryCard: React.FC<any> = (props) => {
    const { img, title, description = '', link = '', isAdmin, id } = props;
    const router = useRouter();
    const [visibleModal, setVisibleModal] = useState(false);
    const [isEdition, setIsEdition] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        setCategoryName(title);
        setCategoryDesc(description);
    }, [])
    return (<>
        <div className={cl.container}>
            <div className={cl.backFilter} ></div>
            <img src={img} className={cl.backImg} alt="categoryimg" />
            <p className={cl.title}>{title}</p>
            <p className={cl.description}>{description}</p>

            <button className={cl.btn} onClick={() => router.push(link)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M2 11H20M20 11L12.2857 3M20 11L12.2857 19" stroke="#033278" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isAdmin ?
                <div className={cl.editor_btns}>
                    <button className={cl.deleteBtn} onClick={() => { setIsEdition(false); setVisibleModal(true) }}><img src='/imgs/icons/icons8-delete-100.png' alt='deletebtn' /></button>
                    <button onClick={() => { setIsEdition(true); setVisibleModal(true) }} className={cl.deleteBtn}><img alt='e' src='/imgs/icons/free-icon-edit-button-6324968.png' /></button>
                </div>
                : null}
        </div >
        {isAdmin ?
            <Modal visible={visibleModal} setVisible={setVisibleModal} >
                <div className={cl.modalContent}>
                    {!isEdition ? <div>Вы уверены что хотите удалить категорию {title}? <br />
                        <div className={cl.navbtns}>
                            <button className={cl.modal_navbtn} onClick={() => {
                                dispatch(deleteCategory({ id: id }));
                                setVisibleModal(false);
                            }}>Да</button><button className={cl.modal_navbtn} onClick={() => setVisibleModal(false)}>Нет</button></div> </div>
                        :
                        <div>
                            <form onSubmit={(e) => {
                                e.preventDefault(); dispatch(changeCategory({ id: id, category_name: categoryName, description: categoryDesc })); setVisibleModal(false);
                            }}>
                                <BaseInput type='text' placeholder='Название категории' value={categoryName} onChange={setCategoryName} isDark={true} />
                                <BaseInput type='text' placeholder='Описание' value={categoryDesc} onChange={setCategoryDesc} isDark={true} />
                                <MainButton style={{ margin: '30px 0' }} type="submit" buttonText='Изменить категорию' disabled={categoryName.length < 1 ? true : false}></MainButton>
                            </form>
                        </div>
                    }
                </div>
            </Modal> : null}

    </>
    )
}
