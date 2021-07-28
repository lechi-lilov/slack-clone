import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAR2_W8RyvYEP6f9ggXxAlPUkysOB7kvAg",
  authDomain: "slack-clone-2adde.firebaseapp.com",
  projectId: "slack-clone-2adde",
  storageBucket: "slack-clone-2adde.appspot.com",
  messagingSenderId: "421459324961",
  appId: "1:421459324961:web:d3724e8e28d4f529d83360",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
