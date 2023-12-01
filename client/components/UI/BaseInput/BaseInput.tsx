import React from 'react'
import cl from './BaseInput.module.css'

export const BaseInput = ({
    type, placeholder, value, onChange, isDark
}: { type: string, placeholder: string, value: string, onChange: any, isDark: boolean }) => {



    const handlerInput = (e: any) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        return formattedPhone;
    }
    return (
        <input className={isDark ? cl.dark_input : cl.base_input} type={type} placeholder={placeholder} value={value} onChange={(e) => type === "phone" ?
            onChange(handlerInput(e)) : onChange(e.target.value)} />
    )
}
function formatPhoneNumber(value: string): string {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 2) {
        return '+7' + phoneNumber;
    }
    if (phoneNumberLength < 5) {
        return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}`;
    }
    if (phoneNumberLength < 8)
        return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
    if (phoneNumberLength < 10) {
        return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} - ${phoneNumber.slice(7, 9)}`;
    }
    if (phoneNumberLength > 10)
        return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} - ${phoneNumber.slice(7, 9)} - ${phoneNumber.substring(9, 11)}`;

    return value;
}
