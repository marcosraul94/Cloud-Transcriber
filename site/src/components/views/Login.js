import React, { useContext } from 'react'
import LoginForm from '../authentication/Login'
import { AuthContext } from '../contexts/Auth'


const Login = () => {
    const { user } = useContext(AuthContext)

    return (
        <>
            <h1> Login user {user ? JSON.stringify(user) : 'unknown'}  </h1>
            <LoginForm />
        </>
    )
}

export default Login