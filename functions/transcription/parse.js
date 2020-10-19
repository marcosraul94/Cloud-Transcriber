const parseTranscriptResult = ({ results }) => 
    results.map(({ alternatives }) => alternatives[0].transcript).join('\n')


const parseRequest = ({ body }) => {
    return {
        name: body.name,
        user: body.user,
    }
}


module.exports = {
    parseRequest,
    parseTranscriptResult,
}