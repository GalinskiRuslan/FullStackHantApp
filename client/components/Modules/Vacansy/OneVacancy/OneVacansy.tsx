"use client"
import React, { useEffect } from 'react'
import cl from "./OneVacansy.module.css"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '@/components/UI/loader/Loader'
import { AppDispatch } from '@/Menegment/store/Redux-global'
import { getOneVacancy } from '@/Menegment/store/Fethers/VacansySlice'
import { MainButton } from '@/components/UI/MainButton/MainButton'
import { LeadForm } from '../../LeadForm/LeadForm'

export const OneVacansy = () => {
    const router = useRouter();
    const { user } = useSelector<any, any>(state => state.login);
    const { oneVacancy, isLoading, error } = useSelector<any, any>(state => state.vacansy);
    const dispatch = useDispatch<AppDispatch>();
    const { id } = router.query;
    useEffect(() => {
        if (id) {
            dispatch(getOneVacancy(Number(id)));
        }
    }, [id]);
    if (isLoading) {
        return <Loader />
    }
    else {
        return (<>
            <div className={cl.topContainer}>
                <div className={cl.innerCont}>
                    <button onClick={() => router.push('/vacansy')} className={cl.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                            <path d="M21 9H1M1 9L8.71429 17M1 9L8.71429 1" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Все вакансии
                    </button>
                    <h3 className={cl.title}>{oneVacancy.vacansy_name}</h3>
                    <p className={cl.salary}>{oneVacancy.salary}</p>
                    <div className={cl.skils}><p className={cl.city}>{oneVacancy.city}</p>{oneVacancy.skills.split(/,|;/).slice(0, 2).map((el: any, i: any) =>
                        <p className={cl.skill} style={i == 0 ? { background: `rgba(39, 248, 35, 0.30)` } : { background: `rgba(35, 248, 248, 0.30)` }} key={i}>{el}</p >)}
                        <p className={cl.experience}>{oneVacancy.experience}</p>
                    </div>
                    <MainButton buttonText="Откликнуться" style={{ maxWidth: '300px', marginTop: '60px' }} />
                </div>
            </div>
            <div className={cl.about}>
                <div className={cl.inner}>
                    <p className={cl.subtitle}>О компании</p>
                    <p className={cl.text}>Компания FinTechPro - это профессионалы, которые в ней работают.
                        Мы создаем для людей широкие возможности, позволяющие полностью раскрыть их потенциал и стать лучшими в своем деле.<br /><br />
                        Наша компания гордится высокой степенью профессионализма каждого члена нашей команды. Мы собрали специалистов с богатым опытом и
                        глубокими знаниями в области финансов и технологий. Благодаря этому мы способны разрабатывать инновационные решения,
                        отвечающие самым сложным потребностям наших клиентов.</p>
                </div>
                <div className={cl.inner}>
                    <p className={cl.subtitle}>Стек технологий</p>
                    <div className={cl.skils}>
                        <p className={cl.stack}>IOS</p>
                        <p className={cl.stack}>Objective-C</p>
                        <p className={cl.stack}>Swift</p>
                        <p className={cl.stack}>ООП</p>
                        <p className={cl.stack}>Алгоритмы</p>
                        <p className={cl.stack}>ASP</p>
                        <p className={cl.stack}>dotnet.Framework</p>
                        <p className={cl.stack}>MVC</p>
                    </div>
                </div>
                <div className={cl.inner}>
                    <p className={cl.subtitle}>Тебе предстоит</p>
                    <ul className={cl.list}>
                        {
                            oneVacancy.tasks.split(',' || ';').map((el: string, index: number) => {
                                return <li key={index}>{el}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={cl.inner}>
                    <p className={cl.subtitle}>Мы ждем от тебя</p>
                    <ul className={cl.list}>
                        {oneVacancy.skills.split(',' || ';').map((el: string, index: number) => {
                            return <li key={index}>{el}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={cl.steps}>
                <div className={cl.inner}>
                    <p className={cl.subtitle}>Этапы отбора</p>
                    <div className={cl.stepsCards}>
                        <div className={cl.stepsCard}>
                            <p className={cl.step_num}>1</p>
                            <p className={cl.steptitle}>Телефонное интервью</p>
                            <p className={cl.steptext}>Мы расскажем о компании и позиции, а ты поделись предыдущим опытом работы и достижениями.</p>
                            <div className={cl.steptime_container}>
                                <div className={cl.steptime}>5-10 минут</div>
                            </div>
                        </div>
                        <div className={cl.stepsCard}>
                            <p className={cl.step_num}>2</p>
                            <p className={cl.steptitle}>Видеоинтервью</p>
                            <p className={cl.steptext}>HR вместе с техническим специалистом проверят нужные навыки и оценят кандидата по нашим грейдам.
                                Это клёвая возможность для кандидата проявить себя и узнать подробнее о задачах.</p>
                            <div className={cl.steptime_container}>
                                <div className={cl.steptime}>60 минут</div>
                                <div className={cl.steptime}>Google Meet</div>
                            </div>
                        </div>
                        <div className={cl.stepsCard}>
                            <p className={cl.step_num}>3</p>
                            <p className={cl.steptitle}>Финальное интервью</p>
                            <p className={cl.steptext}>Оценим, насколько мы друг другу подходим по культуре. Расскажем о команде и процессах внутри компании.</p>
                            <div className={cl.steptime_container}>
                                <div className={cl.steptime}>60 минут</div>
                                <div className={cl.steptime}>Google Meet</div>
                            </div>
                        </div>
                    </div>
                    <div className={cl.whatweevaluate}>
                        <div className={cl.evaluate_left}>
                            <p className={cl.evaluate_title}>Что мы оцениваем на собеседованиях?</p>
                            <p className={cl.evaluate_text}>На собеседованиях мы оцениваем
                                и hard-, и soft- скиллы</p>
                        </div>
                        <div className={cl.evaluate_right}>
                            <div className={cl.evaluate_right_item}><p className={cl.evaluate_right_item_procent}>50%</p><p className={cl.evaluate_right_item_text}>Hard skills</p></div>
                            <div className={cl.evaluate_right_item2}><p className={cl.evaluate_right_item_procent}>50%</p><p className={cl.evaluate_right_item_text}>Soft skills</p></div>
                        </div>
                    </div>
                    <div className={cl.adviсe}>
                        <p className={cl.subtitle}>Советы кандидатам</p>
                        <div className={cl.adviсe_first}>
                            <div className={cl.advice_first_card}>
                                <p className={cl.step_num}>1</p>
                                <p className={cl.steptitle}>Изучи вакансию</p>
                                <ul className={cl.advice_list}>
                                    <li>Cтек технологий</li>
                                    <li>Задачи и требования</li>
                                    <li>Подготовь список вопросов</li>
                                </ul>
                            </div>
                            <div className={cl.advice_first_card}>
                                <p className={cl.step_num}>2</p>
                                <p className={cl.steptitle}>Подготовь место для интервью</p>
                                <ul className={cl.advice_list}>
                                    <li>Тихое</li>
                                    <li>Светлое</li>
                                    <li>Стабильное подключение к интернету</li>
                                    <li>Рассчитай время на дорогу (оффлайн-встреча)</li>
                                </ul>
                            </div>
                        </div>
                        <div className={cl.adviсe_first}>
                            <div className={cl.advice_sec_card}>
                                <p className={cl.step_num}>3</p>
                                <p className={cl.steptitle}>Изучи вакансию</p>
                                <ul className={cl.advice_list}>
                                    <li>Cтек технологий</li>
                                    <li>Задачи и требования</li>
                                    <li>Подготовь список вопросов</li>
                                </ul>
                            </div>
                            <div className={cl.advice_sec_card}>
                                <p className={cl.step_num}>4</p>
                                <p className={cl.steptitle}>Подготовь место для интервью</p>
                                <ul className={cl.advice_list}>
                                    <li>Тихое</li>
                                    <li>Светлое</li>
                                    <li>Стабильное подключение к интернету</li>
                                    <li>Рассчитай время на дорогу (оффлайн-встреча)</li>
                                </ul>
                            </div>
                            <div className={cl.advice_sec_card}>
                                <p className={cl.step_num}>5</p>
                                <p className={cl.steptitle}>Подготовь место для интервью</p>
                                <ul className={cl.advice_list}>
                                    <li>Тихое</li>
                                    <li>Светлое</li>
                                    <li>Стабильное подключение к интернету</li>
                                    <li>Рассчитай время на дорогу (оффлайн-встреча)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LeadForm />
        </>)
    }
}