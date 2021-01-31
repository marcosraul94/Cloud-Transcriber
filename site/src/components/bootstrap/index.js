import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import LoadingPage from '../common/LoadingPage'

const Bootstrap = ({ children }) => {
    const { user } = useContext(AuthContext)
    const isLoadingAuthenticationInfo = user === undefined

    return (
        isLoadingAuthenticationInfo ? (
            <LoadingPage />
        ) : (children)
    )
}

export default Bootstrap