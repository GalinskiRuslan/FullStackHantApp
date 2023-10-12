'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../_app';
import CategoryService from '@/services/Category';
import { observer } from "mobx-react-lite"
import Layout from './layout';
import Modal from '@/components/Modal/Modal';
import cl from './adminStyle.module.css'
import { Category } from '@/models/Category';
import { Vacansy } from '@/models/Vacansy';
import { Tabs } from '@/components/Tabs/Tabs';
import { CategoryBlock } from '@/components/Category/Category';


export default observer(function Admin() {
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);
    const [vacansyModal, setVacansyModal] = useState(false);

    //Стейты вакансий
    const [vacansy, setVacansy] = useState<Vacansy>();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
            store.getAllVacansy();
        }
    }, [store])
    const openNewVacansy = () => {
        /*  setVacansy(); */
        openNewVacansy()
    }
    if (store.isAuth == true) {
        return (
            <>
                <Layout><button onClick={() => store.logout()}>Выйти</button>
                    {/* <div className={cl.tabsContainer}>
                        <div className={activeTabs == 1 ? cl.activeTabs : cl.tabs}>
                            <p className={cl.title}>Вакансии: </p>
                            {store.vacansy.map((item, index) => (<div key={index} className={cl.items_vacansy}>
                                <p> {item.id}. {item.vacansy_name}</p>
                                <p>  <label className="switch">
                                    <input onChange={() => { store.changeActiveVacansy(item.id, !item.isActive) }} checked={item.isActive} type="checkbox" />
                                    <span className="slider"></span>
                                </label>{item.isActive ? "Активна" : "Не активна"}</p>
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>

                                    <button className={cl.editBtn} onClick={() => { }}><img style={{ maxWidth: '25px' }} src='/free-icon-edit-button-6324968.png' alt='icon' /></button>
                                    <button className={cl.button_delete} onClick={() => { }}>X</button>
                                </div>
                            </div>))}
                            <button onClick={() => openNewVacansy()}>Добавить Вакансию</button>
                        </div>

                        <div className={cl.nav}><button onClick={() => { setActiveTabs(0) }}>Категории</button><button onClick={() => { setActiveTabs(1) }}>Вакансии</button></div>
                    </div> */}

                    <Modal visible={vacansyModal} setVisible={setVacansyModal} >
                        <form onClick={(e) => e.preventDefault()}>
                            {/* <div>
                                <label>Название вакансии</label><br />
                                <input type="text" value={vacansyName} onChange={(e) => setVacansyName(e.target.value)} placeholder='название вакансии' />
                            </div>
                            <div style={{ margin: "15px 0" }}>
                                <label>Активна вакансия</label>
                                <select onChange={(e) => { setIsActiveVacansy(e.target.value == '0' ? false : true); console.log(isActiveVacansy); }
                                }><option value={1}>Да</option><option value={0}>Нет</option> </select>
                            </div>
                            <div>
                                <label>Описание вакансии</label><br />
                                <input type="text" placeholder='Описание вакансии' value={descriptionVacansy} onChange={(e) => setDescriptionVacansy(e.target.value)} />
                            </div>
                            <div>
                                <label>Навыки через запятую</label><br />
                                <input type="text" placeholder='Навыки' value={skillsVacansy} onChange={(e) => setSkillsVacansy(e.target.value)} />
                            </div>
                            <div>
                                <label>уровень зп</label><br />
                                <input type="text" value={salaryVacansy} onChange={(e) => setSalaryVacansy(Number(e.target.value.replace(/\D/g, '')))} />
                            </div>
                            <div>
                                <label>Опыт работы</label><br />
                                <input type="text" placeholder='Опыт работы' value={expresionVacansy} onChange={e => setExpresionVacansy(e.target.value)} />
                            </div>
                            <label></label><br />
                            <select onChange={(e) => {
                                setCategoryIdVacansy(Number(e.target.value))
                            }}>
                                {store.category.map((item, index) => <option value={item.id} key={index}>{item.category_name}</option>)}
                            </select>
                            <button onClick={() => console.log(isActiveVacansy)}>123</button>
                            <button onClick={() => store.addNewVacansy(vacansyName, isActiveVacansy, descriptionVacansy, skillsVacansy, salaryVacansy, expresionVacansy, categoryIdVacansy)}>Добавить</button> */}
                        </form>
                    </Modal>
                </Layout >
                <Tabs items={[{
                    title: "Категории", content: <CategoryBlock />, buttonName: "Категории"
                }, { title: "Vacansy", content: "Some content2", buttonName: "some cont2" }, { title: "Eshe cto-to", content: "Some content3", buttonName: "some cont3F" }]}></Tabs>

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
