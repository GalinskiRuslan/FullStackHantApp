"use client"
import React, { useContext, useEffect, useState } from 'react'
import cl from './Vacansy.module.css'
import { observer } from 'mobx-react-lite'
import { Context } from '@/pages/_app'
import Modal from '../Modal/Modal'

export const VacansyBlock = observer(() => {
    const { store } = useContext(Context);
    const [vacansyModal, setVacansyModal] = useState(false);
    const [vacansy, setVacansy] = useState<any>({
        id: null,
        vacansy_name: '',
        isActive: true,
        description: '',
        skills: '',
        salary: 0,
        expresion: '',
        categoryId: null,
    });
    useEffect(() => {
        store.getAllVacansy();
        if (vacansyModal == false) {
            setVacansy({
                id: null,
                vacansy_name: '',
                isActive: true,
                description: '',
                skills: '',
                salary: 0,
                expresion: '',
                categoryId: null,
            })

        }

    }, [store, vacansyModal])



    return (
        <div>
            <h6>Вакансии:</h6>
            <button onClick={() => setVacansyModal(true)}>Добавить Вакансию</button>
            <div className={cl.items_vacansy}>
                <p>Наименования:</p>
                <p>Видна ли на сайте:</p>
                <p>Описание:</p>
                <p>Зп:</p>
                <p style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>Редактировать/удалить</p>
            </div>
            {store.vacansy.map((item, index) => (<div key={index} className={cl.items_vacansy}>
                <p> {item.id}. {item.vacansy_name}</p>
                <p>  <label className="switch">
                    <input onChange={() => { store.changeActiveVacansy(item.id, !item.isActive) }} checked={item.isActive} type="checkbox" />
                    <span className="slider"></span>
                </label>{item.isActive ? "Активна" : "Не активна"}</p>
                <div> {item.description.length > 10 ? item.description.slice(0, 10) + "..." : item.description}</div>
                <p>{item.salary}</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>

                    <button className={cl.editBtn} onClick={() => {
                        setVacansy(item)
                        setVacansyModal(true);

                    }}><img style={{ maxWidth: '25px' }} src='/free-icon-edit-button-6324968.png' alt='icon' /></button>
                    <button className={cl.button_delete} onClick={() => { }}>X</button>
                </div>
            </div>))}

            <Modal visible={vacansyModal} setVisible={setVacansyModal} >
                <form onClick={(e) => e.preventDefault()}>
                    <div>
                        <label>Название вакансии</label><br />
                        <input className={cl.input_text} type="text" value={vacansy.vacansy_name} onChange={(e) => setVacansy({ ...vacansy, vacansy_name: e.target.value })} placeholder='название вакансии' />
                    </div>
                    <div style={{ margin: "15px 0" }}>
                        <label>Активна вакансия</label>
                        <select value={vacansy.isActive ? '1' : '0'} onChange={(e) => {
                            setVacansy({ ...vacansy, isActive: e.target.value == '0' ? false : true });
                        }

                        }><option value={1}>Да</option><option value={0}>Нет</option> </select>
                    </div>
                    <div>
                        <label>Описание вакансии</label><br />
                        <input className={cl.input_text} type="text" placeholder='Описание вакансии' value={vacansy.description} onChange={(e) => setVacansy({ ...vacansy, description: e.target.value })} />
                    </div>
                    <div>
                        <label>Навыки через запятую</label><br />
                        <input className={cl.input_text} type="text" placeholder='Навыки' value={vacansy.skills} onChange={(e) => setVacansy({ ...vacansy, skills: e.target.value })} />
                    </div>
                    <div>
                        <label>уровень зп</label><br />
                        <input className={cl.input_text} type="text" value={vacansy.salary} onChange={(e) => setVacansy({ ...vacansy, salary: Number(e.target.value.replace(/\D/g, '')) })} />
                    </div>
                    <div>
                        <label>Опыт работы</label><br />
                        <input className={cl.input_text} type="text" placeholder='Опыт работы' value={vacansy.expresion} onChange={e => setVacansy({ ...vacansy, expresion: e.target.value })} />
                    </div>
                    <label></label><br />
                    <select className={cl.input_select} onChange={(e) => {
                        setVacansy({ ...vacansy, categoryId: Number(e.target.value) })
                    }}>
                        {store.category.map((item, index) => <option value={item.id} key={index}>{item.category_name}</option>)}
                    </select><br />
                    {<button className={cl.button_add} onClick={() => {
                        vacansy.id != null ? store.changeVacansy(vacansy.id, vacansy.vacansy_name, vacansy.isActive, vacansy.description, vacansy.skills, vacansy.salary, vacansy.expresion, vacansy.categoryId) :
                            store.addNewVacansy(
                                vacansy.vacansy_name,
                                vacansy.isActive,
                                vacansy.description,
                                vacansy.skills,
                                vacansy.salary,
                                vacansy.expresion,
                                vacansy.categoryId,);
                        setVacansy({
                            id: null,
                            vacansy_name: '',
                            isActive: true,
                            description: '',
                            skills: '',
                            salary: 0,
                            expresion: '',
                            categoryId: null,
                        })
                    }}>{vacansy.id != null ? "Изменить" : "Добавить"}</button>}
                </form>
            </Modal>
        </div >
    )
})
