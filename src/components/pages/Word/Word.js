import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Word.scss';


import randomWord from '../../../helpers/data/wordData';

class TattooWord extends React.Component {
  state = {
    word: [],
    font: 'font1',
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

  fontPicker = (e) => {
    const newFont = e.target.id;
    this.setState({ font: newFont });
  }

  componentDidMount() {
    this.splitWord();
  }

  render() {
    const bellyWord = this.state.word;
    const pickedFont = this.state.font;
    const halfOne = bellyWord[0];
    const halfTwo = bellyWord[1];
    return (
      <div className="wordCard">
        <div className="card col-md-6">
          <div className="tattoo-holder">
            <img className="card-img-top" src="https://i.imgur.com/tUVzOw5.jpg" alt="test belly"/>
            <div className="tattooScript" id="halfOne"><span className={ pickedFont }>{ halfOne }</span></div>
            <div className="tattooScript" id="halfTwo"><span className={ pickedFont }>{ halfTwo }</span></div>
          </div>
        <div className="card-footer">
          <div className="buttonHolder">
            <button className="btn btn-dark card-btn" id="saveTattoo">Save</button>
            <button className="btn btn-dark card-btn" id="tryAgain" onClick={this.splitWord}>Get Inked</button>
              <UncontrolledDropdown >
                <DropdownToggle className="btn btn-dark dropdown-toggle card-btn align-middle" id="dropdownMenu2" nav caret>
                  Choose Font
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="dropdown-item font1" type="button" id="font1" onClick={this.fontPicker}>Libre Baskerville</DropdownItem>
                  <DropdownItem className="dropdown-item font2" type="button" id="font2" onClick={this.fontPicker}>Uncial Antiqua</DropdownItem>
                  <DropdownItem className="dropdown-item font3" type="button" id="font3" onClick={this.fontPicker}>Shadows Into Light</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooWord;
