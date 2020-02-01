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

const saveNewTattoo = (freshInk) => axios.post(`${baseUrl}/tums/.json`, freshInk);

const updateTattoo = (tattooId, noRegerts) => axios.put(`${baseUrl}/tums/${tattooId}.json`, noRegerts);

const deleteTattoo = (tattooId) => axios.delete(`${baseUrl}/tums/${tattooId}.json`);

const updateTattooInfo = (tattooId, updatedTattooInfo) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tums/${tattooId}.json`)
    .then((response) => {
      const tattooObject = { ...response.data };
      tattooObject.imgUrl = updatedTattooInfo.imgUrl;
      tattooObject.uid = updatedTattooInfo.uid;
      tattooObject.font = updatedTattooInfo.font;
      // eslint-disable-next-line prefer-destructuring
      tattooObject.half1 = updatedTattooInfo.word[0];
      // eslint-disable-next-line prefer-destructuring
      tattooObject.half2 = updatedTattooInfo.word[1];
      tattooObject.word = `${updatedTattooInfo.word[0]}o${updatedTattooInfo.word[1]}`;
      updateTattoo(tattooId, tattooObject)
        .then(() => {
          resolve();
        });
    })
    .catch((errorFromUpdateTattoo) => reject(errorFromUpdateTattoo));
});


export default {
  getSavedTattoosByUid,
  getUid,
  saveNewTattoo,
  updateTattooInfo,
  deleteTattoo,
};
