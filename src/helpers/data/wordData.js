import axios from 'axios';
import wordKey from '../apiKeys.json';

const key = wordKey.wordKey;

const getRandomWord = () => new Promise((resolve, reject) => {
  axios({
    url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': `${key}`,
    },
  })
    .then((response) => {
      const baseWord = response.data.word;
      resolve(baseWord);
    })
    .catch((errorFromGetRandomWord) => {
      reject(errorFromGetRandomWord);
    });
});

export default { getRandomWord };
