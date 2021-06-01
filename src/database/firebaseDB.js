import firebase from 'firebase'

// Firebase Database
var firebaseConfig = {
    apiKey: "AIzaSyA7BK2f5zmktfLh3NV-TnVsYACHtEq9TdA",
    authDomain: "react-ecommerce-ee9e4.firebaseapp.com",
    projectId: "react-ecommerce-ee9e4",
    storageBucket: "react-ecommerce-ee9e4.appspot.com",
    messagingSenderId: "401898472950",
    appId: "1:401898472950:web:685fba84ae482e495b73d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
// console.log(firebase.database());

export default firebase;