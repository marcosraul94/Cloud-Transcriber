import axios from 'axios'
import firebase from 'firebase'
import firebaseApp from '../../firebase'
import { parseRelativeCloudPath, generateCloudURI } from './parse'
import { getAudioDuration } from '../../utils/audio'
import { TRANSCRIPTS }  from './colections'

export const makeCheckTranscriptionRequest = async (operationName, user) => {
    const url = 'https://us-central1-cloud-transcriber-6011c.cloudfunctions.net/checkTranscriptionProgress'
    const data = { operationName, user }
    return axios.post(url, data)
}

export const makeCreateTranscriptRequest = async (fileName, user, uri, language, audioDuration) => {
    const created = firebase.firestore.FieldValue.serverTimestamp()
    const data = { fileName, user, uri, language, audioDuration, created }
    return firebaseApp.firestore().collection(TRANSCRIPTS).add(data)
}

export const makeStartTranscribingProcessRequest = async (file, user, language) => {
    const fileName = file.name
    const uri = generateCloudURI(fileName, user)
    const audioDurationMs = await getAudioDuration(file)
    const docRef = await makeCreateTranscriptRequest(fileName, user, uri, language, audioDurationMs)
    return makeAudioFileUploadRequest(file, user, docRef.id, language, uri)
}



export const makeAudioFileUploadRequest = async (file, user, docId, language, uri) => {
    const relativeCloudPath = parseRelativeCloudPath(uri)
    const fileCloudRef = firebaseApp.storage().ref().child(relativeCloudPath)
    const metadata = { 
        customMetadata: {
            docId,
            language,
            user,
            uri,
        } 
    }

    return fileCloudRef.put(file, metadata)
}
