const validateRequiredFields = (requiredFields = [], data = {}) => {
    for (const field of requiredFields) {
        const isFieldMissing = !data[field]
        if (isFieldMissing) throw new Error(`Missing required field ${field} from ${JSON.stringify(data)}`)
    }
}


module.exports = {
    validateRequiredFields
}