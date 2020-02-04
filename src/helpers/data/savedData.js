import axios from 'axios';
import firebase from 'firebase';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUid = () => firebase.auth().currentUser.uid;

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

const getSingleTattooById = (tattooId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tums/${tattooId}.json`)
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});

const saveNewTattoo = (freshInk) => axios.post(`${baseUrl}/tums/.json`, freshInk);

const updateTattoo = (tattooId, noRegerts) => axios.put(`${baseUrl}/tums/${tattooId}.json`, noRegerts);

const deleteTattoo = (tattooId) => axios.delete(`${baseUrl}/tums/${tattooId}.json`);

export default {
  getSavedTattoosByUid,
  getUid,
  saveNewTattoo,
  updateTattoo,
  deleteTattoo,
  getSingleTattooById,
};

// getSavedTattoosByUid gets called in Saved.js
// getUid gets called in Word.js
// saveNewTattooo gets called in Word.js
// updateTattoo gets called in tattooCard.js
// deleteTattoo gets called in Saved.js
