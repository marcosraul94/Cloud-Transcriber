import React, { useState } from 'react'
import firebase from '../../firebase';
import TextInput from '../common/TextInput'
import PasswordInput from '../common/PasswordInput'
import Button from '../common/Button'


const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(response)
        }
        catch (error) {
            console.error(error)
        }
    }
    
    return (
        <>
            <TextInput value={email} onChange={setEmail} />
            <PasswordInput value={password} onChange={setPassword} />
            <Button name={'Log in'} onClick={handleClick}/>
        </>

    )
}

export default LoginForm