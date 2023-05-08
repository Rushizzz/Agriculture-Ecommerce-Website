import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD5yqGFHWAczkaUZUIE7FfWPlqJrF8aNm0",
    authDomain: "agriculture-ecom.firebaseapp.com",
    projectId: "agriculture-ecom",
    storageBucket: "agriculture-ecom.appspot.com",
    messagingSenderId: "1005853335682",
    appId: "1:1005853335682:web:5cd7f0906e384de6a4d49b",
    measurementId: "G-V1ZPQ5EGCV"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;

  

  

              