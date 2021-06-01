import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

function Global(props) {
    const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));

    const loginUser = () => {
        setUserLogin(true)
        localStorage.setItem("login", true)
    }
    const logoutUser = () => {
        setUserLogin(false)
        localStorage.removeItem("login")
    }

    return (
        <GlobalContext.Provider
        value={{
            userLogin: userLogin,
            loginUser: loginUser,
            logoutUser: logoutUser
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default Global