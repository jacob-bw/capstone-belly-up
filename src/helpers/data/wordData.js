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
      const CheckForO = () => {
        console.log('baseword test', baseWord);
        const str = `${baseWord}`;
        const validate = str.toUpperCase();
        const yep = validate.includes('O');
        if (yep === false) {
          console.log('NOPE. Try again.');
        } else {
          console.log('yeah it works, now figure out how to refire the axios call');
        }
        resolve(baseWord);
      };
      CheckForO();
    })
    .catch((errorFromGetRandomWord) => {
      reject(errorFromGetRandomWord);
    });
});


export default { getRandomWord };
