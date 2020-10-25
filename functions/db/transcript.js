const { firestore } = require('firebase-admin')
const { db } = require('../firebase')


const TRANSCRIPT = 'transcripts'


const createTranscript = async (id, data) => {
    const created = firestore.FieldValue.serverTimestamp()
    const dataWithTimestamp = Object.assign({}, data, { created })
    console.log(JSON.stringify(dataWithTimestamp))
    return db.collection(TRANSCRIPT).doc(id).create(dataWithTimestamp)
}
    


const updateTranscript = async (id, data) => {
    const updated = firestore.FieldValue.serverTimestamp()
    const dataWithTimestamp = Object.assign({}, data, { updated })
    return db.collection(TRANSCRIPT).doc(id).update(dataWithTimestamp)
}


const saveTranscriptionDoneState = async ({ operationName, transcriptionText }) => {
    const id = operationName
    const data = { text: transcriptionText, }
    return updateTranscript(id, data)
}


const saveTranscriptionPendingState = async ({ operationName, }) => {
    const id = operationName
    const data = {}
    return updateTranscript(id, data)
}


const saveTranscriptionStartState = async ({ operationName, uri, language, user, durationMs, }) => {
    const id = operationName
    const data = {
        text: null,
        user, 
        audio: { durationMs, uri, language },
    }
    return createTranscript(id, data)
}


module.exports = {
    createTranscript,
    updateTranscript,
    saveTranscriptionDoneState,
    saveTranscriptionPendingState,
}