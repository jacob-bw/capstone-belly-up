import React from 'react';
import './Word.scss';

import randomWord from '../../../helpers/data/wordData';

class TattooWord extends React.Component {
  state = {
    word: [],
  }

  splitWord = () => {
    randomWord.getRandomWord()
      .then((response) => {
        console.log('the response is ', response);
        const wordMidpoint = response.length / 2;
        console.log('the middle of the word has an index of', wordMidpoint);
        const howManyOs = response.match(/o/gi).length;
        if (howManyOs > 1) {
          const newArr = [];
          for (let i = response.indexOf('o');
            i >= 0;
            i = response.indexOf('o', i + 1)) {
            newArr.push(i);
          }
          // for loop over newArr
          // for each item, Math.abs(i[x] - wordMidPoint);
          // then, form ANOTHER new array out of all the differences,
          // theen sort new array,
          // THEN get lowest indexed difference
          // compare lowest indexed difference to original index
          // finally, split into subarrays at original index point
          console.log('this is the array of indexes', newArr);
          const indexArr = [];
          console.log(newArr.length);
          const setIndexArrLength = newArr.length;
          console.log(setIndexArrLength);
          // for (let j = 0; j < newArr.length; j + 1) {
          //   const indexDiff = Math.abs(newArr[j] - wordMidpoint);
          //   console.log('this is the difference between the O index and indexDiff:', indexDiff);
          // }
          console.log('this is the index length array', indexArr);
        } else {
          console.log('only one "O", loop function not applicable');
        }
        // const firstO = response.indexOf('o');
        // const lastO = response.lastIndexOf('o');
        // console.log('the first O has an index of', firstO);
        // console.log('the last O has an index of', lastO);
        const bellyScript = response.split('o');
        // if (howManyOs > 1) {
        //   console.log('there are ', howManyOs, 'Os in this word');
        //   const oSplit = response.subarray(firstO);
        //   console.log(oSplit);
        // } else {
        //   console.log('party');
        // }
        this.setState({ word: bellyScript });
      })
      .catch((err) => console.error('error from splitWord', err));
  }


  componentDidMount() {
    this.splitWord();
  }

  render() {
    const bellyWord = this.state.word;
    const halfOne = bellyWord[0];
    const halfTwo = bellyWord[1];
    return (
      <div className="wordCard">
        <div className="card col-md-4">
        <img className="card-img-top" src="https://media.giphy.com/media/oOX5qIDkzDjeo/giphy.gif" alt="test belly"/>
        <div className="card-body">
          <p>{ halfOne } "O" { halfTwo }</p>
          {/* <button className="btn btn-dark card-btn" id="changeFont">Change Font</button>
          <button className="btn btn-dark card-btn" id="saveTattoo">Save</button>
          <button className="btn btn-dark card-btn" id="tryAgain">go again</button> */}
        </div>
      </div>
      </div>
    );
  }
}

export default TattooWord;
