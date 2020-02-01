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

  componentDidMount() {
    this.getTattoos();
  }

  render() {
    return (
      <div className="flashBook">
      <h1>Saved Tattoos</h1>
      <div className="tattoos d-flex flex-wrap">
        {this.state.tattoos.map((tattoo) => <TattooCard key={tattoo.id} tattoo={tattoo}/>)}
      </div>
      </div>
    );
  }
}


export default Saved;
