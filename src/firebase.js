import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDV6JMIyVESxxZCtUNdQkOBgaHmmCFJe-0",
    authDomain: "speakup-96b17.firebaseapp.com",
    databaseURL: "https://speakup-96b17.firebaseio.com",
    projectId: "speakup-96b17",
    storageBucket: "speakup-96b17.appspot.com",
    messagingSenderId: "64566622361",
    appId: "1:64566622361:web:5021404d02d8fec0ffe008",
    measurementId: "G-PZ3PS41YDW"}

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const database = firebaseApp.firestore();

    export default database