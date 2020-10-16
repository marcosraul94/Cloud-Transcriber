const functions = require('firebase-functions');
const startTranscribing = require('./transcribe');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.startTranscribing = functions.storage.object().onFinalize(startTranscribing);
