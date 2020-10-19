const speech = require('@google-cloud/speech')
const { parseLanguageCode } = require('./parse')


const buildTranscribeRequest = (uri, language) => {
    const audio = { uri }
    const config = { languageCode: parseLanguageCode(language) }
    return { audio, config, }
}


const transcribe = async (uri, language) => {
    const transcribeRequest = buildTranscribeRequest(uri, language)
    const speechClient = new speech.SpeechClient()
    const [ operation ] = await speechClient.longRunningRecognize(transcribeRequest)
    return operation
}


module.exports = transcribe