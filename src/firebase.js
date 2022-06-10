import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
     apiKey: "AIzaSyBD7qYAnelYVMxk3abOAdvqefBjwkw3UgU",
     authDomain: "real-time-chat-app-83e6a.firebaseapp.com",
     projectId: "real-time-chat-app-83e6a",
     storageBucket: "real-time-chat-app-83e6a.appspot.com",
     messagingSenderId: "672196432222",
     appId: "1:672196432222:web:57369629f02f58cc0bffcf"
})

const dataBase = firebaseApp.firestore();

const auth = firebase.auth();

export { dataBase, auth };