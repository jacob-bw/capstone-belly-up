import firebase from 'firebase';
import apiKeys from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

// const getUid = () => firebase.auth().currentUser.uid;

const authFuncs = () => {
  // getUid();
  firebaseApp();
};

export default authFuncs;
