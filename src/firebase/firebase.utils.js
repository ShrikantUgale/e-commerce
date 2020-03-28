import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOok7UgAYCR2M5gRDtb9b2bhmiQJlNn7k",
    authDomain: "reactclothing-db.firebaseapp.com",
    databaseURL: "https://reactclothing-db.firebaseio.com",
    projectId: "reactclothing-db",
    storageBucket: "reactclothing-db.appspot.com",
    messagingSenderId: "99837863689",
    appId: "1:99837863689:web:bbfffed0feb161e9b295d8",
    measurementId: "G-CFD7ZL4YPN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;