import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Word.scss';


import randomWord from '../../../helpers/data/wordData';
import savedData from '../../../helpers/data/savedData';

class TattooWord extends React.Component {
  state = {
    word: [],
    font: 'font1',
    tum: 'https://i.imgur.com/tUVzOw5.jpg',
  }

  // bellyImg = ['https://i.imgur.com/tUVzOw5.jpg', 'https://i.imgur.com/dYVeIRv.jpg', 'https://i.imgur.com/Fw8ul6U.jpg'];

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

  tumPicker = (e) => {
    const newTumVar = e.target.id;
    if (newTumVar === 'belly1') {
      // this.setState({ tum: 'https://i.imgur.com/tUVzOw5.jpg' });
      console.log('newTumVar is belly1');
    } else if (newTumVar === 'belly2') {
      // this.setState({ tum: 'https://i.imgur.com/dYVeIRv.jpg' });
      console.log('newTumVar is belly2');
    } else if (newTumVar === 'belly3') {
      // this.setState({ tum: 'https://i.imgur.com/Fw8ul6U.jpg' });
      console.log('newTumVar is belly3');
    }
  }

  saveCard = (e) => {
    e.preventDefault();
    const newTattooObj = {
      imgUrl: this.state.tum,
      uid: savedData.getUid(),
      font: this.state.font,
      half1: this.state.word[0],
      half2: this.state.word[1],
      word: `${this.state.word[0]}o${this.state.word[1]}`,
    };
    savedData.saveNewTattoo(newTattooObj)
      .then(() => console.log('tattoo added to archive', newTattooObj.word))
      .catch((err) => console.error('err from saveCard', err));
  }

  componentDidMount() {
    this.splitWord();
  }

  render() {
    const bellyWord = this.state.word;
    const pickedFont = this.state.font;
    const pickedTum = this.state.tum;
    const halfOne = bellyWord[0];
    const halfTwo = bellyWord[1];
    return (
      <div className='wordCard'>
        <div className='card col-md-6'>
          <div className='tattoo-holder'>
            <img className='card-img-top' src={ pickedTum } alt=''/>
            <div className='tattooScript' id='halfOne'><span className={ pickedFont }>{ halfOne }</span></div>
            <div className='tattooScript' id='halfTwo'><span className={ pickedFont }>{ halfTwo }</span></div>
          </div>
        <div className='card-footer'>
          <div className='buttonHolder'>
            <UncontrolledDropdown>
              <DropdownToggle className='btn btn-dark dropdown-toggle card-btn align-middle' id='dropdownMenu3' nav caret>
                New Belly
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='dropdown-item belly1' type='button' id='belly1' onClick={this.tumPicker}><img src="https://i.imgur.com/tUVzOw5.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly2' type='button' id='belly2' onClick={this.tumPicker}><img src="https://i.imgur.com/dYVeIRv.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly3' type='button' id='belly3' onClick={this.tumPicker}><img src="https://i.imgur.com/Fw8ul6U.jpg" alt=" "></img></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown >
              <DropdownToggle className='btn btn-dark dropdown-toggle card-btn align-middle' id='dropdownMenu2' nav caret>
                New Font
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='dropdown-item font1' type='button' id='font1' onClick={this.fontPicker}>Libre Baskerville</DropdownItem>
                <DropdownItem className='dropdown-item font2' type='button' id='font2' onClick={this.fontPicker}>Uncial Antiqua</DropdownItem>
                <DropdownItem className='dropdown-item font3' type='button' id='font3' onClick={this.fontPicker}>Shadows Into Light</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <button className='btn btn-dark card-btn' id='saveTattoo' onClick={this.saveCard}>Save</button>
            <button className='btn btn-dark card-btn' id='tryAgain' onClick={this.splitWord}>Get Inked</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooWord;
