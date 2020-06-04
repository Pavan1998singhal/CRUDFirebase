import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDEBMOTDoFaIrycaDig95_tqKciLPyJOP4",
    authDomain: "react-crud-ac5ce.firebaseapp.com",
    databaseURL: "https://react-crud-ac5ce.firebaseio.com",
    projectId: "react-crud-ac5ce",
    storageBucket: "react-crud-ac5ce.appspot.com",
    messagingSenderId: "373902570975",
    appId: "1:373902570975:web:e68775f1d0135f1294406a"
  };
 
  // Initialize Firebase
 var fireDb =  firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();  