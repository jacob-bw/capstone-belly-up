import firebase from 'firebase';
import apiKeys from '../apiKeys.json';

const firebaseConnection = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseConnection;
