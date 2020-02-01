import axios from 'axios';
import firebase from 'firebase';
import apiKeys from '../apiKeys.json';

const getUid = () => firebase.auth().currentUser.uid;

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getSavedTattoosByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tums.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allSavedTattoos = response.data;
      const savedTattoos = [];
      if (allSavedTattoos != null) {
        Object.keys(allSavedTattoos).forEach((tattooId) => {
          const newTattoo = allSavedTattoos[tattooId];
          newTattoo.id = tattooId;
          savedTattoos.push(newTattoo);
        });
      }
      resolve(savedTattoos);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getSavedTattoosByUid, getUid };