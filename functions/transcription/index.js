const functions = require('firebase-functions')
const speech = require('@google-cloud/speech')
const { parseRequest, parseTranscriptResult } = require('./parse')
const { validateTranscriptCheckRequest } = require('./validation')
const { updateTranscript } = require('../db/transcript')


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


const checkTranscriptionProgress = async (req, res) => {
    validateTranscriptCheckRequest(req)

    const { operationName, user } = parseRequest(req)
    const data = { operationName, user }
    const speechClient = new speech.SpeechClient()
    const operation = await speechClient.checkLongRunningRecognizeProgress(operationName)

    if (operation.done) {
        const [ result ] = await operation.promise()
        data.status = 'Transcription done'
        data.transcriptionText = parseTranscriptResult(result)
        await saveTranscriptionDoneState(data)
        functions.logger.info(data)
        res.send({ transcript: parseTranscriptResult(result) })
    }
    else {
        data.status = 'Transcription still in progress'
        await saveTranscriptionPendingState(data)
        functions.logger.info(data)
        res.send(data)
    }
}


module.exports = checkTranscriptionProgress