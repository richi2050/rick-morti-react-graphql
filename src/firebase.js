import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBaShipuCRayaYHi3BxrnUH5er-HV7mB0E",
    authDomain: "home-ab19e.firebaseapp.com",
    databaseURL: "https://home-ab19e.firebaseio.com",
    projectId: "home-ab19e",
    storageBucket: "home-ab19e.appspot.com",
    messagingSenderId: "867774136943",
    appId: "1:867774136943:web:e1909c1de695b19095839a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs');

export function getFavs(uid) {
  console.log(uid)
    return db.doc(uid).get().then(snap => {
        return snap.data().array
    })
}

export function updateDB(array, uid) {
    return db.doc(uid).set({array})
}

export function signOut() {
    firebase.auth().signOut()
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider).then(snap => snap.user)
}
