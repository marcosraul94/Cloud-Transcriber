import React from 'react'
import NavBar from './NavBar'


const View = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default View