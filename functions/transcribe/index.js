const { isValidTranscriptionRequest } = require('./validation');


const startTranscribing = async object => {
    if (!isValidTranscriptionRequest(object)) return;

    const parsedObjectData = JSON.stringify(object);
    console.log(parsedObjectData);
};


module.exports = startTranscribing;