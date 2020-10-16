import React from 'react'


const PasswordInput = ({ value = '', onChange }) => {
    return (
        <input type="password" value={value} onChange={ event => onChange(event.target.value) }/>
    )
}

export default PasswordInput