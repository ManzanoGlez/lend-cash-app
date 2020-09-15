import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyACd6oD3q_hfcF3663sxWZPK-cUX7sPwhw",
    authDomain: "lend-cash-app.firebaseapp.com",
    databaseURL: "https://lend-cash-app.firebaseio.com",
    projectId: "lend-cash-app",
    storageBucket: "lend-cash-app.appspot.com",
    messagingSenderId: "958717751965",
    appId: "1:958717751965:web:d621ee030f6da9aa2a5a74",
};



firebase.initializeApp(firebaseConfig);


 const DB = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {
     DB,googleAuthProvider,firebase
 }