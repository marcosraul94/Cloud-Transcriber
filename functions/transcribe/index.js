const functions = require('firebase-functions')
const transcribe = require('./transcribe')
const { parseUploadObject } = require('./parse')
const { validateUploadObject } = require('./validation')
const { createTranscript  } = require('../db/transcript')


const saveTranscriptionStartState = async ({ operationName, uri, language, user, durationMs, }) => {
    const id = operationName
    const data = {
        text: null,
        user, 
        audio: { durationMs, uri, language },
    }
    return createTranscript(id, data)
}


const startTranscriptionProcess = async object => {
    validateUploadObject(object)
    const data = Object.assign( parseUploadObject(object), { status: 'Starting transcribing process' } )
    functions.logger.info(data)
    
    const { uri, language } = data
    const operation = await transcribe(uri, language)
    data.status = 'Transcribing process started'
    data.operationName = operation.name
    functions.logger.info(data)

    await saveTranscriptionStartState(data)
    functions.logger.info( Object.assign(data, { status: 'Start transcript process saved' }) )
}


module.exports = startTranscriptionProcess