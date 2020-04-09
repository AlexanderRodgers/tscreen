import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
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
}

const db = firebase.firestore();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
   vm.$store.dispatch('fetchUser', user);
});

export {db, auth}
export default firebase;