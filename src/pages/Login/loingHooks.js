/*
 * @Author: yuzhoufen
 * @Date: 2021-11-08 16:50:01
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-08 17:01:39
 * @Description: Do not edit
 * @FilePath: \my-app\src\pages\Login\loingHooks.js
 */
import React, { useState } from 'react'
function LoginForm() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const printValues = (e) => {
        e.preventDefault()
        console.log(userName, password)
    }
    return (
        <form onSubmit={printValues}>
            <label>
                Username
                <input
                    name="username"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
            </label>
            <label>
                Password
                <input
                    name="password"
                    value={password}
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </label>
            <br />
            <button>submit</button>
        </form>
    )
}

export default LoginForm
