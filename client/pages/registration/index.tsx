import React, { useContext, useState } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '../_app'

export default function Registration() {
    const [user_email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user_name, setUserName] = useState('')
    const { store } = useContext(Context);

    return (

        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder='Имя пользователя' type='text' required name='user_name' value={user_name} onChange={(e) => { setUserName(e.target.value) }} />
                <input placeholder=' Пароль' type="text" required name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input placeholder=' Почта' type='email' required name='user_email' value={user_email} onChange={(e) => { setUserEmail(e.target.value) }} />
                <button onClick={() => store.registration(user_name, password, user_email)}>Зарегистрироваться!</button>
            </form>
        </div>
    )
}
