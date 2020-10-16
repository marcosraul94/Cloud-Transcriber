import React from 'react'


const Button = ({ name, onClick }) => {
    if (!name) throw new Error('Button component needs a name')
    if (!onClick) throw new Error('Button component needs a click handler')

    return (
        <button onClick={onClick}> {name} </button>
    )
}

export default Button