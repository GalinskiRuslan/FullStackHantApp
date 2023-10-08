'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../_app';
import CategoryService from '@/services/Category';
import { observer } from "mobx-react-lite"
import Layout from './layout';
import Modal from '@/components/Modal/Modal';


export default observer(function Admin() {
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);
    const [visible, setVisible] = useState(false);
    const [category, setCategory] = useState<string>('')
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
            store.getAllCategory();
        }
    }, [store])
    if (store.isAuth == true) {
        return (
            <>
                <Layout><button onClick={() => store.logout()}>Выйти</button>
                    <div> {store.category.map((item) => <div key={item.id}>{item.category_name}<button onClick={() => store.deleteCategory(item.id)}>X</button></div>)}</div>
                    <button onClick={() => setVisible(true)}>Добавить категорию</button>
                    <Modal visible={visible} setVisible={setVisible}>
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" name='category_name' placeholder="Название категории" onChange={(e) => setCategory(e.target.value)} value={category} />
                            <button onClick={() => { store.saveNewCategory(category); store.getAllCategory(); setCategory('') }}>Отправить</button>
                        </form>
                    </Modal>
                </Layout>
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
