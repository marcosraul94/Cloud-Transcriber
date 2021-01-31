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


const saveTranscriptionDoneState = async ({ transcriptionText, docId }) => {
    const data = { text: transcriptionText, }
    return updateTranscript(docId, data)
}


const saveTranscriptionPendingState = async ({ docId }) => {
    const data = {}
    return updateTranscript(docId, data)
}


const saveTranscriptionStartState = async ({ operationName, docId }) => {
    const data = { operationName }
    return updateTranscript(docId, data)
}


module.exports = {
    createTranscript,
    updateTranscript,
    saveTranscriptionStartState,
    saveTranscriptionDoneState,
    saveTranscriptionPendingState,
}