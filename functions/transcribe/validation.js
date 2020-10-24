const { parseUploadObject } = require('./parse')
const { validateRequiredFields } = require('../utils/validation')


const SUPORTED_AUDIO_EXTENSIONS = ['.wav', ]


const validateAudioExtension = uri => {
    const isInvalidExtension = !SUPORTED_AUDIO_EXTENSIONS.some(extension => uri.endsWith(extension))
    if (isInvalidExtension) throw new Error(`Invalid extension in file ${uri}`)
}


const validateUploadObject = object => {
    const parsedRequest = parseUploadObject(object)

    const requiredFields = ['uri',]
    validateRequiredFields(requiredFields, parsedRequest)

    const { uri } = parsedRequest
    validateAudioExtension(uri)
}


module.exports = {
    validateUploadObject,
}