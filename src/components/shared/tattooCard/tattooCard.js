import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import cardShape from '../../../helpers/propz/cardShape';

class TattooCard extends React.Component {
  static propTypes = {
    tattooCard: cardShape.cardShape,
    deleteTattoo: Proptypes.func,
    fontPicker: Proptypes.func,
    updateTattoo: Proptypes.func,
  }

  deleteTattooEvent = (e) => {
    e.preventDefault();
    const { deleteTattoo, tattoo } = this.props;
    deleteTattoo(tattoo.id);
  }

  // updateTattooEvent = (e) => {
  //   e.preventDefault();
  //   const { updateTattoo, tattoo } = this.props;
  //   updateTattoo(tattoo.id);
  // }

  render() {
    const { tattoo } = this.props;
    return (
      <div className='wordCard' id={tattoo.id}>
        <div className='card'>
          <div className='tattoo-holder'>
            <img className='card-img-top saved' src={tattoo.imgUrl} alt={tattoo.word}/>
            <div className='savedTattooScript' id='halfOne'><span className={tattoo.font}>{tattoo.half1}</span></div>
            <div className='savedTattooScript' id='halfTwo'><span className={tattoo.font}>{tattoo.half2}</span></div>
          </div>
        <div className='card-footer'>
          <div className='buttonHolder'>
            <Link className='btn btn-dark card-btn' id='updateBtn' to={`/${tattoo.id}/editMode`}>Update</Link>
            <button className='btn btn-dark card-btn' id={tattoo.id} onClick={this.deleteTattooEvent}>delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooCard;
