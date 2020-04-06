import firebase from 'firebase/app';
import 'firebase/firestore';
imort 'firebase/auth';

let firebaseConfig = {
   apiKey: "AIzaSyBvOL0PIrvTQm32Tii6u2mahgZZ73IPmuc",
   authDomain: "tscreen-9ed69.firebaseapp.com",
   databaseURL: "https://tscreen-9ed69.firebaseio.com",
   projectId: "tscreen-9ed69",
   storageBucket: "tscreen-9ed69.appspot.com",
   messagingSenderId: "813548889640",
   appId: "1:813548889640:web:ca6682c4bcb513ea0db71d",
   measurementId: "G-B6ZY99QH4L"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;