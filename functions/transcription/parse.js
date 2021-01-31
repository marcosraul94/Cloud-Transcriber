const parseTranscriptResult = ({ results }) => 
    results.map(({ alternatives }) => alternatives[0].transcript).join('\n')


const parseRequest = ({ body }) => {
    return {
        operationName: body.operationName,
        user: body.user,
        docId: body.docId
    }
}


module.exports = {
    parseRequest,
    parseTranscriptResult,
}