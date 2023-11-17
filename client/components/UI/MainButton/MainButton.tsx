import React from 'react'
import cl from './MainButton.module.css'


export const MainButton = (props: any) => {
    const { buttonText, disabled, ...propses } = props;
    return (
        <button className={cl.main_button} disabled={disabled} {...propses}>{buttonText}</button>
    )
}
