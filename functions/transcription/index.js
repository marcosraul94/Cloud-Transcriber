const functions = require('firebase-functions')
const speech = require('@google-cloud/speech')
const { parseRequest, parseTranscriptResult } = require('./parse')
const { validateTranscriptCheckRequest } = require('./validation')


const checkTranscriptionProgress = async (req, res) => {
    validateTranscriptCheckRequest(req)

    const { name, user } = parseRequest(req)
    const logData = { name, user }
    const speechClient = new speech.SpeechClient()
    const operation = await speechClient.checkLongRunningRecognizeProgress(name)

    if (operation.done) {
        const [ result ] = await operation.promise()
        logData.status = 'Transcription done'
        functions.logger.info(logData)
        res.send({ transcript: parseTranscriptResult(result) })
    }
    else {
        logData.status = 'Transcription still in progress'
        functions.logger.info(logData)
        res.send(logData)
    }
}


module.exports = checkTranscriptionProgress