import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB_q5mIBhiKpPvPyh4ahFa-V8GvacqC5qo",
  authDomain: "test1-642bf.firebaseapp.com",
  databaseURL: "https://test1-642bf.firebaseio.com",
  projectId: "test1-642bf",
  storageBucket: "test1-642bf.appspot.com",
  messagingSenderId: "38925878874",
  appId: "1:38925878874:web:c25daf57693331afc7fa63",
  measurementId: "G-SD102LF81D"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// firebase.analytics();