import firebase from "firebase"; 


const firebaseConfig = {
    apiKey: "AIzaSyCEg9iFXD6PaHNeffM-M0i9VC_Aoem6b5o",
    authDomain: "facebook-clone-32b1b.firebaseapp.com",
    databaseURL: "https://facebook-clone-32b1b.firebaseio.com",
    projectId: "facebook-clone-32b1b",
    storageBucket: "facebook-clone-32b1b.appspot.com",
    messagingSenderId: "859220571897",
    appId: "1:859220571897:web:8038156765742a4cbb5428",
    measurementId: "G-SJ2RMTEZ2H"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;