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

export const createCollectionAndDocs = async (collectionKey, docsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  docsToAdd.forEach((o) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, o);
  });
  return await batch.commit();
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnap = await userRef.get();

  if (!userSnap.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
