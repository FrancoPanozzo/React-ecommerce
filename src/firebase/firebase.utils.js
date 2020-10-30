import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAbzFCzqxDOPuolH3ceefsb2l-WiXupvN0',
  authDomain: 'crwn-ecom-47c7a.firebaseapp.com',
  databaseURL: 'https://crwn-ecom-47c7a.firebaseio.com',
  projectId: 'crwn-ecom-47c7a',
  storageBucket: 'crwn-ecom-47c7a.appspot.com',
  messagingSenderId: '691114110364',
  appId: '1:691114110364:web:8da60e4ea3beb04533ac59',
  measurementId: 'G-3SZ9Q01TPJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
