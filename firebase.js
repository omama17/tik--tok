import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBYKMBVcm9EttvlS3-WEeIZpV0qjkRqJoc",
    authDomain: "tik-tok-clone-f265c.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-f265c.firebaseio.com",
    projectId: "tik-tok-clone-f265c",
    storageBucket: "tik-tok-clone-f265c.appspot.com",
    messagingSenderId: "200346395548",
    appId: "1:200346395548:web:12b91f247885f86bb99e59",
    measurementId: "G-FSX9C48G50"
  };
  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;