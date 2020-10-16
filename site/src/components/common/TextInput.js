import React from 'react'


const TextInput = ({ value = '', onChange }) => {
    return (
        <input type="text" value={value} onChange={ event => onChange(event.target.value) }/>
    )
}


export default TextInput