import React from 'react';


const FileInput = ({ onChange }) => {
    const handleChange = e => onChange(e.target.files[0]);

    return (
        <>
            <input type='file' onChange={handleChange}/>
        </>
    );
};


export default FileInput;