import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC9L2CDhQ2H7gYZVBsoFX1Jz9wXynzfpSE",
    authDomain: "cloud-transcriber-6011c.firebaseapp.com",
    databaseURL: "https://cloud-transcriber-6011c.firebaseio.com",
    projectId: "cloud-transcriber-6011c",
    storageBucket: "cloud-transcriber-6011c.appspot.com",
    messagingSenderId: "572809131503",
    appId: "1:572809131503:web:5c4b6891ca3ee77c80721a",
    measurementId: "G-7T1G0M0SEH"
  }

export default firebase.initializeApp(firebaseConfig)
