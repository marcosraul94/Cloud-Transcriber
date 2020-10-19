const { parseRequest } = require('./parse')
const { validateRequiredFieldsInRequest } = require('../utils/validation')


const validateRequiredFields = parsedRequest => {
    const requiredFields = ['name']
    validateRequiredFieldsInRequest(requiredFields, parsedRequest)
}


const validateTranscriptCheckRequest = req => {
    const parsedReq = parseRequest(req)
    validateRequiredFields(parsedReq)
}


module.exports = {
    validateTranscriptCheckRequest
}