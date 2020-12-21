 import firebase from 'firebase'
 const firebaseConfig = {
    apiKey: "AIzaSyC0zr4j6qd8ce8zA2C33mRnKzKLO9OkVyQ",
    authDomain: "do-an-ci.firebaseapp.com",
    projectId: "do-an-ci",
    storageBucket: "do-an-ci.appspot.com",
    messagingSenderId: "819222334225",
    appId: "1:819222334225:web:7d4731d95fba034288dab0"
  };
  const fire = firebase.initializeApp(firebaseConfig)
  export default fire ;
