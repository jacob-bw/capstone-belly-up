import React from 'react';
import savedData from '../../../helpers/data/savedData';

import TattooCard from '../../shared/tattooCard/tattooCard';

import './Saved.scss';

class Saved extends React.Component {
  state = {
    tattoos: [],
  }

  getTattoos = () => {
    savedData.getSavedTattoosByUid(savedData.getUid())
      .then((tattoos) => this.setState({ tattoos }))
      .catch((error) => console.error('error from get tattoos', error));
  }

  deleteTattoo = (tattooId) => {
    savedData.deleteTattoo(tattooId)
      .then(() => {
        this.getTattoos();
        console.log('successfully deleted tattoo from archive');
      })
      .catch((err) => console.error('error from delete tattoo', err));
  }

  updateCard = (e) => {
    // just needs to update the text or img
    e.preventDefault();
    const updatedTattooObj = {
      imgUrl: this.state.tum,
      uid: savedData.getUid(),
      font: this.state.font,
      half1: this.state.word[0],
      half2: this.state.word[1],
      word: `${this.state.word[0]}o${this.state.word[1]}`,
    };
    savedData.updateTattoo(updatedTattooObj)
      .then(() => console.log('tattoo added to archive', updatedTattooObj.word))
      .catch((err) => console.error('err from saveCard', err));
  }

  componentDidMount() {
    this.getTattoos();
  }

  render() {
    return (
      <div className="flashBook">
      <h1>Saved Tattoos</h1>
      <div className="tattoos d-flex flex-wrap">
        { this.state.tattoos.map((tattoo) => <TattooCard key={tattoo.id} tattoo={tattoo} deleteTattoo={this.deleteTattoo}/>) }
      </div>
      </div>
    );
  }
}


export default Saved;
