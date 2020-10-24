const { firestore } = require('firebase-admin')
const { db } = require('../firebase')


const TRANSCRIPT = 'transcript'


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



module.exports = {
    createTranscript,
    updateTranscript,
}