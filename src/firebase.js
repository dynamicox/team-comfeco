import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_TEAM_API_KEY,
  authDomain: process.env.REACT_APP_TEAM_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_TEAM_PROJECT_ID,
  storageBucket: process.env.REACT_APP_TEAM_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_TEAM_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_TEAM_APP_ID
});

export const googleProvider = new firebase.auth.GoogleAuthProvider;
export const facebookProvider = new firebase.auth.FacebookAuthProvider;
export const createCredential =  firebase.auth.EmailAuthProvider.credential;
export const auth = app.auth()
export default app