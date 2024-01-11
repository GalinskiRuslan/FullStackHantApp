import YandexMap from "@/components/UI/YandexMap/YandexMap"
import cl from "./Contacts.module.css"
import Image from "next/image"
import firstIcon from "./imgs/Left.png"
import secIcon from "./imgs/Left (1).png"
import threeIcon from "./imgs/Left (2).png"
import Logo from "./imgs/серый лого прозрачный (3) 2.png"
import whatsApp from "./imgs/image 22.png"
import insta from "./imgs/image 23.png"
import faceBook from "./imgs/image 24.png"

export const Contacts = () => {
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <p className={cl.title}>Контакты</p>
                <div className={cl.content}>
                    <div className={cl.mapConteiner}><YandexMap /></div>
                    <div>
                        <div className={cl.itemContract}><Image src={firstIcon} alt="icon" /><div><p>Тел: +7 701 707 7275</p><p>Тел: +7 701 707 7275</p></div></div>
                        <div className={cl.itemContract}><Image src={secIcon} alt="icon" /><p>Email: official.fintechpro@gmail.com</p></div>
                        <div className={cl.itemContract}><Image src={threeIcon} alt="icon" /><p>Адрес: г. Алматы, Кунаева 38 БЦ “Жарсу”</p></div>
                    </div>
                </div>
            </div>
            <div className={cl.footerConteiner}>
                <svg className={cl.backImg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 650" fill="none">
                    <path d="M0 87.9069C0 87.9069 352.5 -52.7639 725 21.7916C1097.5 96.347 1060 137.887 1305 161.056C1550 184.225 1920 45.2367 1920 45.2367V883.167C1920 883.167 1332.5 903.329 876.5 745.309C420.5 587.289 0 853.156 0 853.156V87.9069Z" fill="#011B40" />
                </svg>
                <div className={cl.wrapper2}>
                    <div className={cl.footerContent}>
                        <Image src={Logo} alt="logo" />
                        <div className={cl.footerItems}>
                            <div className={cl.footerItem}>
                                <p>О нас</p>
                                <p>Жизнь в компании</p>
                                <p>Вакансии</p>
                                <p>Контакты</p>
                            </div>
                            <div className={cl.footerItem}>
                                <p>История компании</p>
                                <p>Мы в цифрах</p>
                                <p>4PRO</p>
                                <p>Партнеры</p>
                            </div>
                            <div className={cl.footerItem}>
                                <p>Развитие в компании</p>
                                <p>Наставничество</p>
                                <p>Вакансии</p>
                                <p>Галерея</p>
                            </div>
                            <div className={cl.footerItem}>
                                <p>Мы в соц. сетях</p>
                                <div className={cl.footerSocial}>
                                    <Image src={whatsApp} alt="icon" />
                                    <Image src={insta} alt="icon" />
                                    <Image src={faceBook} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <p className={cl.copyrait}>©️Алматы 2023</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
