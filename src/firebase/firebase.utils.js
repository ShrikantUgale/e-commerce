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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log('========', snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;