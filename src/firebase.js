import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBWuRfyR167EWf-phrGckpqbS9ucVg6PcI',
    authDomain: 'snapchat-clone-7ece7.firebaseapp.com',
    projectId: 'snapchat-clone-7ece7',
    storageBucket: 'snapchat-clone-7ece7.appspot.com',
    messagingSenderId: '334385771231',
    appId: '1:334385771231:web:e65d35170cd2dc773b6f6a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
