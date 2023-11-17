import React from 'react'
import cl from './BaseInput.module.css'

export const BaseInput = ({
    type, placeholder, value, onChange, isDark
}: { type: string, placeholder: string, value: string, onChange: any, isDark: boolean }) => {
    return (
        <input className={isDark ? cl.dark_input : cl.base_input} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    )
}
