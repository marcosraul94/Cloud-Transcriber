import React, { useState, useContext } from 'react'
import firebase from '../../firebase'
import { AuthContext } from '../contexts/Auth'
import FileInput from '../common/FileInput'


const AudioUploadForm = () => {
    const [file, setFile] = useState()
    const { user = {} } = useContext(AuthContext)
    const { uid } = user

    const generateCloudPath = fileName => `${uid}/${fileName}`

    const handleFileChange = newFile => setFile(newFile)
    
    const handleUpload = async () => {
      const cloudPath = generateCloudPath(file.name)
      const fileCloudRef = firebase.storage().ref().child(cloudPath)
      await fileCloudRef.put(file)
    };
    
    return (
      <>
        <FileInput onChange={handleFileChange}/> 
        { file && (<button onClick={handleUpload}> Transcribe </button>) }
      </>
    );
}


export default AudioUploadForm