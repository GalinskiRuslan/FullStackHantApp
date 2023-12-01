"use client"
import { AppDispatch } from '@/Menegment/store/Redux-global';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VacansyCard } from '../VacansyCard/VacansyCard';
import { addNewVacansy, getAllVacansy } from '@/Menegment/store/Fethers/VacansySlice';
import { MainButton } from '@/components/UI/MainButton/MainButton';
import cl from "./VacansyBlock.module.css"
import Modal from '@/components/UI/Modal/Modal';
import { BaseInput } from '@/components/UI/BaseInput/BaseInput';
import { useRouter } from 'next/router';

export const VacansyBlock = (props: any) => {
    const { lengthArray, buttonAll } = props
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, allVacansy } = useSelector<any, any>(state => state.vacansy);
    const { category } = useSelector<any, any>(state => state.category);
    const { user } = useSelector<any, any>(state => state.login);
    const [visible, setVisible] = useState(false);
    const [vacansyName, setVacansyName] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [salary, setSalary] = useState('');
    const [city, setCity] = useState('');
    const [experience, setExperience] = useState('');
    const [tasks, setTasks] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [categoryId, setCategoryId] = useState(-1);

    const router = useRouter();
    useEffect(() => {
        dispatch(getAllVacansy())
    }, [])

    const addVacansy = () => {
        const vacansy: any = {
            vacansy_name: vacansyName,
            description: description,
            skills: skills,
            salary: salary,
            city: city,
            expresion: experience,
            tasks: tasks,
            isActive: isActive,
            categoryId
        }
        dispatch(addNewVacansy(vacansy))
        setVacansyName('')
        setDescription('')
        setSkills('')
        setSalary('')
        setCity('')
        setExperience('')
        setTasks('')
        setIsActive(true)
        setCategoryId(-1)
    }
    const isDisabled = () => {
        if (vacansyName === '' || description === '' || skills === '' || salary === '' || city === '' || experience === '' || tasks === '' || categoryId === -1) {
            return true
        }
        return false
    }

    return (
        <div>{allVacansy.length < 1 ? <p className={cl.notcategory}>Пока нет активных вакансий</p> :
            [...allVacansy].sort((a: any, b: any) => a.id < b.id ? 1 : -1).slice(0, lengthArray ? lengthArray : allVacansy.length).map((vacansy: any) => {
                return <VacansyCard
                    key={vacansy.id}
                    vacansy_name={vacansy.vacansy_name}
                    description={vacansy.description}
                    skills={vacansy.skills} salary={vacansy.salary}
                    city={vacansy.city}
                    experience={vacansy.expresion}
                    isAdmin={user.user_role === 'admin' ? true : false}
                    id={vacansy.id} />
            })}
            {
                user?.user_role === 'admin' ? <div className={cl.addcategory}>
                    <MainButton onClick={() => setVisible(true)} buttonText='Добавить вакансию'></MainButton>
                    <Modal visible={visible} setVisible={setVisible}>
                        <form onSubmit={(e) => { e.preventDefault(); addVacansy(); setVisible(false) }}>
                            <BaseInput type='text' placeholder='Название вакансии' value={vacansyName} onChange={setVacansyName} isDark={true} />
                            <BaseInput type='text' placeholder='Описание' value={description} onChange={setDescription} isDark={true} />
                            <BaseInput type='text' placeholder='Требуемые навыки через запятую' value={skills} onChange={setSkills} isDark={true} />
                            <BaseInput type='text' placeholder='Зарплата' value={salary} onChange={setSalary} isDark={true} />
                            <BaseInput type='text' placeholder='Город' value={city} onChange={setCity} isDark={true} />
                            <BaseInput type='text' placeholder='Опыт работы' value={experience} onChange={setExperience} isDark={true} />
                            <BaseInput type='text' placeholder='Ключевые задачи' value={tasks} onChange={setTasks} isDark={true} />
                            <p>Активна ли вакансия</p>
                            <label className={cl.checkbox_green}>
                                <input type="checkbox" value={isActive ? 1 : 0} onChange={(e) => {
                                    setIsActive(e.target.checked); console.log(e.target.checked);
                                }} />
                                <span className={cl.checkbox_green_switch} data-label-on="On" data-label-off="Off"></span>
                            </label><br />
                            Выберете категорию
                            <select onChange={(e) => {
                                setCategoryId(Number(e.target.value.split('.')[0])); console.log(categoryId);

                            }}>
                                <option value={-1} disabled={true} selected={true}>Выберите категорию</option>
                                {category.map((category: any) => {
                                    return <option key={category.id}>{category.id}. {category.category_name}</option>
                                })}
                            </select>
                            <MainButton style={{ margin: '30px 0' }} type="submit" buttonText='Добавить вакансию' disabled={isDisabled()} ></MainButton>
                        </form>
                    </Modal>
                </div> : <div></div>
            }
            {buttonAll ?
                <div className={cl.btn}>

                    <MainButton style={{ maxWidth: "300px" }} onClick={() => {
                        router.push('/vacansy/all')
                    }} buttonText="Все вакансии" />
                </div> : <div></div>}
        </div >

    )
}
