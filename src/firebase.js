import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDCHSgWgoX-7vdDWdD9BoyouQy_jaqA_Nw",
    authDomain: "twitter-clone-dbcfc.firebaseapp.com",
    projectId: "twitter-clone-dbcfc",
    storageBucket: "twitter-clone-dbcfc.appspot.com",
    messagingSenderId: "1094193399312",
    appId: "1:1094193399312:web:0aa2ab97235052f1552c95",
    measurementId: "G-GFV5YR4B1T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;