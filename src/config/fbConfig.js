import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBEc5tyuDoeLTEyoxOyllTu3AY5ifFR2r0",
    authDomain: "marioplan-491ec.firebaseapp.com",
    databaseURL: "https://marioplan-491ec.firebaseio.com",
    projectId: "marioplan-491ec",
    storageBucket: "marioplan-491ec.appspot.com",
    messagingSenderId: "320604834114",
    appId: "1:320604834114:web:992f65bb5fb0d4ede6e0db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
export default firebase;