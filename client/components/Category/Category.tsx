'use client'
import React, { useContext, useEffect, useState } from 'react'
import cl from "./Category.module.css"
import { Category } from '@/models/Category'
import { Context } from '@/pages/_app';
import Modal from '../Modal/Modal';
import { observer } from "mobx-react-lite"

export const CategoryBlock = observer(() => {
    const [editCategory, setEditCategory] = useState<Category>();
    const [visible, setVisible] = useState(false);
    const [shureDel, setShureDel] = useState<any>(null);
    const [category, setCategory] = useState<string>('')
    const { store } = useContext(Context);

    useEffect(() => {
        store.getAllCategory();
        store.getAllCategory();
        if (!visible) {
            setEditCategory(undefined);
        }
    }, [visible, store])

    return (
        <div>
            <button onClick={() => setVisible(true)}>Добавить Категорию</button>
            {store.category.map((item, index) => <div key={item.id} className={cl.items}>
                <p>{item.id}. {item.category_name} </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className={cl.editBtn} onClick={() => { setEditCategory(item); setVisible(true) }}><img style={{ maxWidth: '25px' }} src='/free-icon-edit-button-6324968.png' alt='icon' /></button>
                    <button className={cl.button_delete} onClick={() => setShureDel(index)} > X</button>
                    <div className={shureDel == index ? cl.messageActive : cl.message}>Вы уверены что хотите удалить Категорию {item.category_name}? <br />
                        <button onClick={() => { store.deleteCategory(item.id); setShureDel(null) }}>Да</button>
                        <button onClick={() => setShureDel(null)}>Нет</button>
                    </div>
                </div>


            </div>)
            }
            <Modal visible={visible} setVisible={setVisible}>
                {editCategory ? <form onSubmit={e => e.preventDefault}>
                    <input type='text' value={editCategory?.category_name} onChange={(e) => { setEditCategory({ id: editCategory?.id, category_name: e.target.value }) }} />
                    <button onClick={() => { store.changeCategory(editCategory.id, editCategory.category_name) }}>Изменить </button>
                </form> : <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='category_name' placeholder="Название категории" onChange={(e) => setCategory(e.target.value)} value={category} />
                    <button onClick={() => { store.saveNewCategory(category); store.getAllCategory(); setCategory(''); setVisible(false) }}>Отправить</button>
                </form>}
            </Modal>
        </div >
    )
}
)