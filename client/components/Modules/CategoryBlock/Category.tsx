'use client'
import React, { useContext, useEffect, useState } from 'react'
import cl from "./Category.module.css"
import Modal from '../../UI/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategory, getAllCategory } from '@/Menegment/store/Fethers/CategorySlice';
import { AppDispatch } from '@/Menegment/store/Redux-global';
import { MainButton } from '@/components/UI/MainButton/MainButton';
import { BaseInput } from '@/components/UI/BaseInput/BaseInput';
import { CategoryCard } from '@/components/Component/Category/CategoryCard';


export const CategoryBlock = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [categoryId, setCategoryId] = useState(-1);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');
    const [categoryImg, setCategoryImg] = useState<any>();
    const [previewImg, setPreviewImg] = useState<any>();
    const [visible, setVisible] = useState(false)

    if (typeof window !== "undefined") {
        const reader = new FileReader();
        reader.readAsDataURL(new Blob([categoryImg]));

        reader.onloadend = () => {
            setPreviewImg(reader.result);
        }
    }
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])
    const { isLoading, error, category } = useSelector<any, any>(state => state.category);
    const { isAuth, user } = useSelector<any, any>(state => state.login);

    const changeFile = (filelist: any) => {
        if (filelist) {
            setCategoryImg(filelist[0])
        }
    }
    const addCategory = () => {
        dispatch(addNewCategory({ category_name: categoryName, imageSrc: categoryImg, description: categoryDesc }))
        setTimeout(() => {
            dispatch(getAllCategory());
        }, 1000)
        setCategoryName('')
        setCategoryDesc('')
        setCategoryImg('')
        setPreviewImg('')
        setCategoryId(-1)
        setVisible(false)
    }
    const changeCategory = (id: any) => {
        setVisible(true)
        setCategoryId(id);

    }
    return (<>
        {category.length > 0 ? <div className={cl.item_block}>
            {category.map((item: any) => {
                return <CategoryCard id={item.id} isAdmin={user?.user_role === 'admin' ? true : false} img={item.imageSrc} title={item.category_name} description={item.description} key={item.id} link={`/admin/Category/${item.id}`} />
            })} </div>
            : <p className={cl.notcategory}>нет категорий</p>}
        {user?.user_role === 'admin' ? <div className={cl.addcategory}>
            <MainButton onClick={() => setVisible(true)} buttonText='Добавить категорию'></MainButton>
        </div> : <div></div>}

        <Modal visible={visible} setVisible={setVisible}>
            <form onSubmit={(e) => { e.preventDefault(); addCategory(); }}>
                <BaseInput type='text' placeholder='Название категории' value={categoryName} onChange={setCategoryName} isDark={true} />
                <BaseInput type='text' placeholder='Описание' value={categoryDesc} onChange={setCategoryDesc} isDark={true} />
                <label>Картинка категорииы</label><br />
                <input type='file' onChange={(e) => changeFile(e.target.files)
                } />
                {categoryImg ? <img className={cl.img_categoryeditor} alt='imga' src={previewImg} /> : null}
                <MainButton style={{ margin: '30px 0' }} type="submit" buttonText='Добавить категорию' disabled={categoryName.length < 1 ? true : false}></MainButton>
            </form>
        </Modal>
    </>
    )


}
