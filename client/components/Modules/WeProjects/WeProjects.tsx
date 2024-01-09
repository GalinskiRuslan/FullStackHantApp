"use client"
import Image from "next/image"
import imgSrc from "./imgs/Component 11.png"
import imgSrc2 from "./imgs/Component 12.png"
import imgSrc3 from "./imgs/Component 13.png"
import imgSrc4 from "./imgs/Component 14.png"
import cl from './WeProjects.module.css'

export const WeProjects = () => {
    return (
        <div className={cl.container}>
            <h6 className={cl.title}>Наши <span className={cl.blue}>HR проекты</span></h6>
            <div className={cl.innerConteiner}>
                <div className={cl.itemCard}>
                    <Image src={imgSrc} alt="photo" className={cl.itemCardImg} />
                    <div className={cl.backDrop}>
                        <p className={cl.itemCardDeckTitle}>Название проекта</p>
                        <p className={cl.itemCardDeck}>Краткое описание 2-3 строки</p>
                    </div>
                </div>

                <div className={cl.itemCard}>
                    <Image src={imgSrc2} alt="photo" className={cl.itemCardImg} />
                    <p className={cl.itemCardDeck}></p>
                    <div className={cl.backDrop}>
                        <p className={cl.itemCardDeckTitle}>Название проекта</p>
                        <p className={cl.itemCardDeck}>Краткое описание 2-3 строки</p>
                    </div>
                </div>
                <div className={cl.itemCard}>
                    <Image src={imgSrc3} alt="photo" className={cl.itemCardImg} />
                    <p className={cl.itemCardDeck}></p>
                    <div className={cl.backDrop}>
                        <p className={cl.itemCardDeckTitle}>Название проекта</p>
                        <p className={cl.itemCardDeck}>Краткое описание 2-3 строки</p>
                    </div>
                </div>
                <div className={cl.itemCard}>
                    <Image src={imgSrc4} alt="photo" className={cl.itemCardImg} />
                    <p className={cl.itemCardDeck}></p>
                    <div className={cl.backDrop}>
                        <p className={cl.itemCardDeckTitle}>Название проекта</p>
                        <p className={cl.itemCardDeck}>Краткое описание 2-3 строки</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
