import React, { useState } from 'react'
import Image from 'next/image'
import cl from "./BlueMenue.module.css"
import { useRouter } from 'next/navigation'
export const BlueMenu = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false)
    return (<>
        <div className={cl.container + " " + (visible ? cl.active : "")}>
            <div className={cl.wrapper}>
                <Image src="/imgs/icons/серый лого прозрачный (3) 1.png" width={128} height={44} alt='logo' onClick={() => router.push("/")} style={{ cursor: "pointer" }} />
                <nav>
                    <ul className={cl.nav}>
                        <li onClick={() => router.push("/")}>Главная</li>
                        <li>О нас</li>
                        <li>Жизнь в компании</li>
                        <li onClick={() => router.push("/vacansy")}>Вакансии</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                <button className={cl.btn}>Связаться</button>
            </div>
        </div>
        <button onClick={() => setVisible(!visible)} className={(visible ? cl.active : "") + " " + cl.burgerBtn}><div className={cl.middle} ></div></button>
    </>
    )
}
