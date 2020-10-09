import React, { useState } from 'react';
import FileInput from './FileInput';
import { storage } from '../firebase';


const Uploader = () => {
    const [file, setFile] = useState();
    
    const handleFileChange = newFile => setFile(newFile);
    const handleUpload = async () => {
      console.log('Uploading file...');
      const fileCloudRef = storage.ref().child(file.name);
      await fileCloudRef.put(file);
      console.log('File uploaded!')
    };
    
    return (
      <>
        <FileInput onChange={handleFileChange}/> 
        { file && (<button onClick={handleUpload}> Transcribe </button>) }
      </>
    );
}; 

export default Uploader;