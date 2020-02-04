import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './Word.scss';


import randomWord from '../../../helpers/data/wordData';
import savedData from '../../../helpers/data/savedData';

class TattooWord extends React.Component {
  state = {
    word: [],
    font: 'font1',
    tum: 'https://i.imgur.com/tUVzOw5.jpg',
    half1: '',
    half2: '',
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
          this.setState({ half1: bellyScript[0], half2: bellyScript[1], word: response });
        } else {
          const bellyScript = response.split('o');
          this.setState({ half1: bellyScript[0], half2: bellyScript[1], word: response });
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
      this.setState({ tum: 'https://i.imgur.com/tUVzOw5.jpg' });
    } else if (newTumVar === 'belly2') {
      this.setState({ tum: 'https://i.imgur.com/dYVeIRv.jpg' });
    } else if (newTumVar === 'belly3') {
      this.setState({ tum: 'https://i.imgur.com/Fw8ul6U.jpg' });
    }
  }

  saveCard = (e) => {
    e.preventDefault();
    const newTattooObj = {
      imgUrl: this.state.tum,
      uid: savedData.getUid(),
      font: this.state.font,
      half1: this.state.half1,
      half2: this.state.half2,
      word: this.state.word,
    };
    savedData.saveNewTattoo(newTattooObj)
      .then(() => this.props.history.push('/saved'))
      .catch((err) => console.error('err from saveCard', err));
  }

  editCard = (e) => {
    e.preventDefault();
    const { tattooId } = this.props.match.params;
    const newTattooObj = {
      imgUrl: this.state.tum,
      uid: savedData.getUid(),
      font: this.state.font,
      half1: this.state.half1,
      half2: this.state.half2,
      word: this.state.word,
    };
    savedData.updateTattoo(tattooId, newTattooObj)
      .then(() => this.props.history.push('/saved'))
      .catch((err) => console.error('err from editCard', err));
  }

  getTattooParams = () => {
    console.log('got tattoo params running');
    const { tattooId } = this.props.match.params;
    savedData.getSingleTattooById(tattooId)
      .then((response) => {
        this.setState({
          word: response.data.word,
          tum: response.data.imgUrl,
          font: response.data.font,
          half1: response.data.half1,
          half2: response.data.half2,
        });
      })
      .catch((err) => console.error('error in getTattooParams', err));
  }

  componentDidMount() {
    this.props.match.params.tattooId ? this.getTattooParams() : this.splitWord();
  }

  render() {
    const { tattooId } = this.state;
    const { authed } = this.props;
    const pickedFont = this.state.font;
    const pickedTum = this.state.tum;
    const halfOne = this.state.half1;
    const halfTwo = this.state.half2;
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
                <DropdownItem className='dropdown-item belly1' type='button' id='belly1'onClick={this.tumPicker}><img src="https://i.imgur.com/tUVzOw5.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly2' type='button' id='belly2'onClick={this.tumPicker}><img src="https://i.imgur.com/dYVeIRv.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly3' type='button' id='belly3'onClick={this.tumPicker}><img src="https://i.imgur.com/Fw8ul6U.jpg" alt=" "></img></DropdownItem>
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
            {
            (authed) && (!tattooId) && <button className='btn btn-dark card-btn' id='saveTattoo' onClick={this.saveCard}>Save</button>
            }
            { !this.props.match.params.tattooId
              ? <button className='btn btn-dark card-btn' id='tryAgain' onClick={this.splitWord}>Get Inked</button>
              : <button className='btn btn-dark card-btn' id='tryAgain' onClick={this.editCard}>Update</button>
            }
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(TattooWord);
