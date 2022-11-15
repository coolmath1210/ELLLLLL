import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCyEPfUMlDmFs4dukIQ8cxRiwy8bRJxUWQ",
    authDomain: "elibary-286fa.firebaseapp.com",
    projectId: "elibary-286fa",
    storageBucket: "elibary-286fa.appspot.com",
    messagingSenderId: "505804793120",
    appId: "1:505804793120:web:6975ebf57f110f8d5ca345",
    measurementId: "G-9B95B89HRR"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
