const functions = require('firebase-functions')
const transcribe = require('./transcribe')
const { parseUploadObject } = require('./parse')
const { validateUploadObject } = require('./validation')


const startTranscriptionProcess = async object => {
    validateUploadObject(object)
    
    const { uri, user, language = 'english' } = parseUploadObject(object)
    const logData = { uri, user, language, status: 'Starting transcribing process'}
    functions.logger.info(logData)
    
    const operation = await transcribe(uri, language)
    logData.operationName = operation.name
    logData.status = 'Transcribing process started'
    functions.logger.info(logData)
}


module.exports = startTranscriptionProcess