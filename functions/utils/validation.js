const validateRequiredFieldsInRequest = (requiredFields = [], parsedRequest = {}) => {
    const printableRequest = JSON.stringify(parsedRequest)

    for (const field of requiredFields) {
        const isFieldMissing = !parsedRequest[field]
        if (isFieldMissing) throw new Error(`Missing required field ${field} from request ${printableRequest}`)
    }
}


module.exports = {
    validateRequiredFieldsInRequest
}