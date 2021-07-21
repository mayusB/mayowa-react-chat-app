 import firebase from 'firebase/app';
 import "firebase/auth";
 import "firebase/database";
 import "firebase/storage";

 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCrvqaWt_irDKXy5yyIeWgsyMNqwqjt-ek",
    authDomain: "react-slack-clone-bb545.firebaseapp.com",
    projectId: "react-slack-clone-bb545",
    storageBucket: "react-slack-clone-bb545.appspot.com",
    messagingSenderId: "977662760491",
    databaseURL: "https://react-slack-clone-bb545-default-rtdb.firebaseio.com/",
    appId: "1:977662760491:web:bc288aa5e6372f2152fc6e",
    // measurementId: "G-LMQEDCENQ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  export default firebase;