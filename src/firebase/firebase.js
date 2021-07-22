import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8q7OQIAFdahbSm9bPMuVAPl2xVX3VS4Y",
    authDomain: "linkedin-clone-e82bf.firebaseapp.com",
    projectId: "linkedin-clone-e82bf",
    storageBucket: "linkedin-clone-e82bf.appspot.com",
    messagingSenderId: "896467500760",
    appId: "1:896467500760:web:5615bd13d8835d346fa1ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

