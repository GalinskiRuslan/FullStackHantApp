import React from 'react'
import cl from "./BaseCard.module.css"

export const BaseCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cl.card}>{children}</div>
    )
}
