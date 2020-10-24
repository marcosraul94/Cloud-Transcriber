const { parseRequest } = require('./parse')
const { validateRequiredFields } = require('../utils/validation')


const validateTranscriptCheckRequest = request => {
    const parsedRequest = parseRequest(request)

    const requiredFields = ['name']
    validateRequiredFields(requiredFields, parsedRequest)
}


module.exports = {
    validateTranscriptCheckRequest
}