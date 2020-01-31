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
        console.log('the word being split is: ', response);
        const wordMidpoint = response.length / 2;
        const howManyOs = response.match(/o/gi).length;
        if (howManyOs > 1) {
          const newArr = [];
          const oIndexArray = [];
          for (let i = response.indexOf('o'); i >= 0; i = response.indexOf('o', i + 1)) {
            newArr.push(i);
            const closestO = Math.abs(i - wordMidpoint);
            oIndexArray.push(closestO);
          }
          const lowestIndex = oIndexArray.indexOf(Math.min(...oIndexArray));
          const bellyScript = [response.substring(0, newArr[lowestIndex]), response.substring(newArr[lowestIndex] + 1)];
          this.setState({ word: bellyScript });
        } else {
          const bellyScript = response.split('o');
          this.setState({ word: bellyScript });
        }
      })
      .catch((err) => console.error('error from splitWord', err));
  }

  // onClick toggle class of "tattoScript" to match selected tattooScript in dropdown on card

  componentDidMount() {
    this.splitWord();
  }

  render() {
    const bellyWord = this.state.word;
    const halfOne = bellyWord[0];
    const halfTwo = bellyWord[1];
    return (
      <div className="wordCard">
        <div className="card col-md-6">
          <div className="tattoo-holder">
            <img className="card-img-top" src="https://i.imgur.com/tUVzOw5.jpg" alt="test belly"/>
            <div className="tattooScript font1" id="halfOne"><span>{ halfOne }</span></div>
            <div className="tattooScript font1" id="halfTwo"><span>{ halfTwo }</span></div>
          </div>
        <div className="card-footer">
          <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle card-btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose Font
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item font1" type="button" id="font1">font 1</button>
              <button className="dropdown-item font2" type="button" id="font2">font 2</button>
              <button className="dropdown-item font3" type="button" id="font3">font 3</button>
            </div>
          <button className="btn btn-dark card-btn" id="saveTattoo">Save</button>
          <button className="btn btn-dark card-btn" id="tryAgain" onClick={this.splitWord}>go again</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooWord;
