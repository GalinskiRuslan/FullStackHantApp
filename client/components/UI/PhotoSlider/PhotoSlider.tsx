import { useState } from 'react';
import cl from './PhotoSlider.module.css'
import Image from 'next/image';
import firstSliderImg from './imgs/Rectangle 1011 (1).png'
import firstSliderImg2 from './imgs/9d95ea473f02222092518d553dd13ea3.gif'
import firstSliderImg3 from './imgs/Rectangle 1011.png'
import firstSliderImg4 from './imgs/Rectangle 1012 (1).png'
import secondSliderImg from './imgs/Rectangle 1014.png'
import secondSliderImg2 from './imgs/Rectangle 1014 (1).png'
import secondSliderImg3 from './imgs/Rectangle 1012 (2).png'
import secondSliderImg4 from './imgs/Rectangle 1012 (3).png'
import treeSliderImg from './imgs/Rectangle 1012.png'
import treeSliderImg2 from './imgs/Rectangle 1013 (1).png'
import treeSliderImg3 from './imgs/Rectangle 1013 (2).png'
import treeSliderImg4 from './imgs/Rectangle 1013 (3).png'



export const PhotoSlider = () => {
    const [active, setActive] = useState(1);

    const activeNext = () => {
        if (active < 4) {
            setActive(active + 1);
        }
    }
    const activePrev = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    }
    return (<>
        <div className={cl.container}>
            <div className={active == 1 ? cl.photoItem + " " + cl.active : cl.photoItemToLeft}>
                <Image src={firstSliderImg} alt='photo' className={cl.imgs + " " + cl.first} />
                <Image src={firstSliderImg2} alt='photo' className={cl.imgs + " " + cl.second} />
                <Image src={firstSliderImg3} alt='photo' className={cl.imgs + " " + cl.third} />
                <Image src={firstSliderImg4} alt='photo' className={cl.imgs + " " + cl.fourth} />
            </div>
            <div className={active == 2 ? cl.photoItem + " " + cl.active : active == 1 ? cl.photoItemRight : cl.photoItemToLeft}>
                <Image src={secondSliderImg} alt='photo' className={cl.imgs + " " + cl.first} />
                <Image src={secondSliderImg2} alt='photo' className={cl.imgs + " " + cl.second} />
                <Image src={secondSliderImg3} alt='photo' className={cl.imgs + " " + cl.third} />
                <Image src={secondSliderImg4} alt='photo' className={cl.imgs + " " + cl.fourth} />
            </div>
            <div className={active == 3 ? cl.photoItem + " " + cl.active : active < 3 ? cl.photoItemRight : cl.photoItemToLeft}>
                <Image src={treeSliderImg} alt='photo' className={cl.imgs + " " + cl.first} />
                <Image src={treeSliderImg2} alt='photo' className={cl.imgs + " " + cl.second} />
                <Image src={treeSliderImg3} alt='photo' className={cl.imgs + " " + cl.third} />
                <Image src={treeSliderImg4} alt='photo' className={cl.imgs + " " + cl.fourth} />
            </div>
            <div className={active == 4 ? cl.photoItem + " " + cl.active : cl.photoItemRight}>
                <Image src={firstSliderImg} alt='photo' className={cl.imgs + " " + cl.first} />
                <Image src={firstSliderImg2} alt='photo' className={cl.imgs + " " + cl.second} />
                <Image src={firstSliderImg3} alt='photo' className={cl.imgs + " " + cl.third} />
                <Image src={firstSliderImg4} alt='photo' className={cl.imgs + " " + cl.fourth} />
            </div>
        </div >
        <div className={cl.navigation}>
            <div className={cl.indicators}>
                <div className={active == 1 ? cl.indicator_item + " " + cl.active : cl.indicator_item}></div>
                <div className={active == 2 ? cl.indicator_item + " " + cl.active : cl.indicator_item}></div>
                <div className={active == 3 ? cl.indicator_item + " " + cl.active : cl.indicator_item}></div>
                <div className={active == 4 ? cl.indicator_item + " " + cl.active : cl.indicator_item}></div>
            </div>
            <div className={cl.arrows}>
                <svg onClick={activePrev} className={cl.arrow} xmlns="http://www.w3.org/2000/svg" width="23" height="44" viewBox="0 0 23 44" fill="none">
                    <path d="M22 43L1.70711 22.7071C1.31658 22.3166 1.31658 21.6834 1.70711 21.2929L22 1" stroke="#044CB3" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg onClick={activeNext} className={cl.arrow} xmlns="http://www.w3.org/2000/svg" width="23" height="44" viewBox="0 0 23 44" fill="none">
                    <path d="M1 1L21.2929 21.2929C21.6834 21.6834 21.6834 22.3166 21.2929 22.7071L1 43" stroke="#044CB3" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

        </div >

    </>)
}
