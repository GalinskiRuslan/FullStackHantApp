"use client"
import React, { useContext, useEffect, useState } from 'react'
import cl from './Vacansy.module.css'
import Modal from '../../UI/Modal/Modal'
import { useSelector } from 'react-redux'
import { BaseCard } from '@/components/UI/BaseCard/BaseCard'

export const VacansyBlock = () => {
    useEffect(() => {


    }, [])

    const getFormatSum = (sum: any) => {
        if (sum.length > 0) {
            return sum.toString()
                .split("")
                .reverse()
                .join("")
                .match(/.{1,3}/g)
                .map(function (item: any) {
                    return item.split("").reverse().join("");
                })
                .reverse()
                .join(" ")
        }
        else {
            return "Не указана"
        }
    }

    return (
        <div className={cl.container} style={{ maxWidth: "80%", margin: "0 auto" }}>
            <BaseCard>

            </BaseCard>
        </div >
    )
}
