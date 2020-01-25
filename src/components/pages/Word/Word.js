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
        const bellyScript = response.split('o');
        console.log(bellyScript[0], 'is the first half');
        console.log(bellyScript[1], 'is the second half');
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
    console.log('bellyword is:', bellyWord);
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
