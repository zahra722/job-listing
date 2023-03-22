  // Import the functions you need from the SDKs you need
import app from 'firebase/app';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOvVJUzIsNm9AEf0bL4tfS7lwBC0G6pog",
  authDomain: "job-listing-9ec1b.firebaseapp.com",
  projectId: "job-listing-9ec1b",
  storageBucket: "job-listing-9ec1b.appspot.com",
  messagingSenderId: "532362349089",
  appId: "1:532362349089:web:1d1966e4d1dba6979c3160",
  measurementId: "G-NYLJST6ZN0"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export{firebase,firestore,app};