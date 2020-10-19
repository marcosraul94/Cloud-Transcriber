const functions = require('firebase-functions');
const startTranscriptionProcess = require('./transcribe')
const checkTranscriptionProgress = require('./transcription')

exports.startTranscriptionProcess = functions.storage.object().onFinalize(startTranscriptionProcess)

exports.checkTranscriptionProgress = functions.https.onRequest(checkTranscriptionProgress)