import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(setUser)
    }, [])

    const value = { user: user && user.uid };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
