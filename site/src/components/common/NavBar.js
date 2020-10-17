import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
        </ul>
    )
}

export default NavBar