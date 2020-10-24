const languageCodeMap = {
    english: 'en-US',
    spanish: 'es-PR'
}


const parseLanguageCode = language => {
    const normalizedLanguage = language.toLowerCase()
    const isLanguageValid = normalizedLanguage in languageCodeMap
    return isLanguageValid && languageCodeMap[normalizedLanguage]
}


const parseURI = object => {
    const { name, bucket } = object
    return `gs://${bucket}/${name}`
}


const parseUser = object => {
    const { name = '' } = object
    const sep = '/'
    return name.includes(sep) ? name.split(sep)[0] : null
}


const parseUploadObject = object => {
    return {
        uri: parseURI(object),
        user: parseUser(object) || 'marcos',
        language: 'english',
        durationMs: 0, 
    }
}


module.exports = {
    languageCodeMap,
    parseLanguageCode,
    parseURI,
    parseUser,
    parseUploadObject,
}