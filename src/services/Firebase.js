import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBGW3sf1hLG9W_d3kgoIv8ecvrWLz3Thxs",
    authDomain: "mercadolivre-clonern-226a9.firebaseapp.com",
    projectId: "mercadolivre-clonern-226a9",
    storageBucket: "mercadolivre-clonern-226a9.appspot.com",
    messagingSenderId: "608663632680",
    appId: "1:608663632680:web:c41c382af8eca364b3ee1d",
    measurementId: "G-ZEWB50YMZ4"
};

firebase.initializeApp(firebaseConfig);