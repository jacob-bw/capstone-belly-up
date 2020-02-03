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

// const updateTattooInfo = (tattooId, updatedTattooInfo) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/tums/${tattooId}.json`)
//     .then((response) => {
//       const tattooObject = { ...response.data };
//       tattooObject.imgUrl = updatedTattooInfo.imgUrl;
//       tattooObject.font = updatedTattooInfo.font;
//       updateTattoo(tattooId, tattooObject)
//         .then(() => {
//           resolve();
//         });
//     })
//     .catch((errorFromUpdateTattoo) => reject(errorFromUpdateTattoo));
// });

const getTattooIdEvent = (e) => {
  const tattooCardId = e.target.id;
  console.log(tattooCardId);
};


export default {
  getSavedTattoosByUid,
  getUid,
  saveNewTattoo,
  // updateTattooInfo,
  updateTattoo,
  deleteTattoo,
  getTattooIdEvent,
};

// getSavedTattoosByUid gets called in Saved.js
// getUid gets called in Word.js
// saveNewTattooo gets called in Word.js
// updateTattoo gets called in tattooCard.js
// deleteTattoo gets called in Saved.js
