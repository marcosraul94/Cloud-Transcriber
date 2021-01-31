import firebaseApp from '../../firebase'
import { TRANSCRIPTS } from './colections'

export const getTranscriptByURI = async (uri, user) => {
    return firebaseApp.firestore().
        collection(TRANSCRIPTS).
        where('user', '==', user).
        where('audio.uri', '==', uri).
        get()
}
