const { parseUploadObject } = require('./parse')
const { validateRequiredFields } = require('../utils/validation')


const validateUploadObject = object => {
    const parsedRequest = parseUploadObject(object)

    const requiredFields = ['uri',]
    validateRequiredFields(requiredFields, parsedRequest)
}


module.exports = {
    validateUploadObject,
}