const { parseUploadObject } = require('./parse')
const { validateRequiredFieldsInRequest } = require('../utils/validation')


const validateRequiredFields = parsedRequest => {
    const requiredFields = ['uri',]
    validateRequiredFieldsInRequest(requiredFields, parsedRequest)
}


const validateUploadObject = object => {
    const parsedRequest = parseUploadObject(object)
    validateRequiredFields(parsedRequest)
}


module.exports = {
    validateUploadObject,
}