const languageCodeMap = {
    english: 'en-US',
    spanish: 'es-PR'
}


const parseLanguageCode = language => {
    const normalizedLanguage = language.toLowerCase()
    const isLanguageValid = normalizedLanguage in languageCodeMap
    return isLanguageValid && languageCodeMap[normalizedLanguage]
}

const parseMetadata = object => object.metadata


const parseURI = object => parseMetadata(object).uri


const parseUser = object => parseMetadata(object).user


const parseLanguage = object => parseMetadata(object).language

const parseDocId = object => parseMetadata(object).docId


const parseUploadObject = object => {
    return {
        uri: parseURI(object),
        user: parseUser(object),
        language: parseLanguage(object),
        docId: parseDocId(object),
    }
}


module.exports = {
    languageCodeMap,
    parseLanguageCode,
    parseURI,
    parseUser,
    parseUploadObject,
}