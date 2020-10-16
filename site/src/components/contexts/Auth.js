import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
    }, [])

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
