'use client'
import { YMaps, Map } from '@pbe/react-yandex-maps';

import React from 'react'

export default function YandexMap() {
    return (
        <YMaps>
            <Map width='100%' defaultState={{ center: [43.220340, 76.972693], zoom: 12 }} />
        </YMaps>
    )
}