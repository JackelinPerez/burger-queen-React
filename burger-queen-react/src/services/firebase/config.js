import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig= {
    apiKey: "AIzaSyADm4q4_wc5n8N3ILN_dPdyuUMiwbwM7B4",
    authDomain: "burger-queen-ad145.firebaseapp.com",
    databaseURL: "https://burger-queen-ad145.firebaseio.com",
    projectId: "burger-queen-ad145",
    storageBucket: "burger-queen-ad145.appspot.com",
    messagingSenderId: "749347552566",
    appId: "1:749347552566:web:1f14145c773a4f80880797",
    measurementId: "G-L2DMLJR2E8"
};



export const fire = firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth();
export const firestore = firebase.firestore()