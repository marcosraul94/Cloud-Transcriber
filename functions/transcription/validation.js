const { parseRequest } = require('./parse')
const { validateRequiredFields } = require('../utils/validation')


const validateTranscriptCheckRequest = request => {
    const parsedRequest = parseRequest(request)

    const requiredFields = ['operationName']
    validateRequiredFields(requiredFields, parsedRequest)
}


module.exports = {
    validateTranscriptCheckRequest
}