import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import FileInput from '../common/FileInput'
import { generateCloudURI } from '../../services/firestore/parse'
import { getTranscriptByURI } from '../../services/firestore/queries'
import { makeStartTranscribingProcessRequest } from '../../services/firestore/requests'


const AudioUploadForm = () => {
    const [file, setFile] = useState()
    const [transcript, setTranscript] = useState('')
    const { user } = useContext(AuthContext)

    const handleFileChange = newFile => setFile(newFile)

    // const scheduleTranscriptionDownload = async () => {
    //   const uri = generateCloudURI(file.name, user)
    //   const querySnapshot = await getTranscriptByURI(uri, user.uid)
    //   console.log('size', querySnapshot.size)
    //   querySnapshot.forEach(doc => console.log(doc.data()))
    //   console.log('our uri =>', uri)

      // return new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve(makeCheckTranscriptionRequest(transcriptId))
      //   }, offset)
      // })
    // }
    
    // const handleUpload = async () => {
    //   await makeAudioFileUploadRequest(user.uid, file)
    //   await scheduleTranscriptionDownload()
    // };

    const startTranscription = async () => {
      await makeStartTranscribingProcessRequest(file, user, 'english')
      console.log('done')
    }
    
    return (
      <>
        <FileInput onChange={handleFileChange}/> 
        { file && (<button onClick={startTranscription}> Transcribe </button>) }
      </>
    );
}


export default AudioUploadForm