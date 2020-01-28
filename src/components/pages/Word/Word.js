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
          const responseArr = response.split('');
          console.log(responseArr);
          const newArr = [];
          for (let i = response.indexOf('o');
            i >= 0;
            i = response.indexOf('o', i + 1)) {
            newArr.push(i);
          }
          console.log('this is the array of indexes', newArr);
        } else {
          console.log('party');
        }
        // use Math.abs to compare i[x] + wordMidpoint)
        // whichever absolute value is lowest, use that as the breakpoint for the subarray


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
