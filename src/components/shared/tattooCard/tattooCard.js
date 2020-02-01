import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Proptypes from 'prop-types';

import cardShape from '../../../helpers/propz/cardShape';

class TattooCard extends React.Component {
  static propTypes = {
    tattooCard: cardShape.cardShape,
    deleteTattoo: Proptypes.func,
    fontPicker: Proptypes.func,
  }

  deleteTattooEvent = (e) => {
    e.preventDefault();
    const { deleteTattoo, tattoo } = this.props;
    deleteTattoo(tattoo.id);
  }

  fontPicker = (e) => {
    const newFont = e.target.id;
    this.setState({ font: newFont });
  }

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
              <UncontrolledDropdown >
                <DropdownToggle className='btn btn-dark dropdown-toggle card-btn align-middle' id='dropdownMenu2' nav caret>
                  Choose Font
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='dropdown-item font1' type='button' id='font1' onClick={this.fontPicker}>Libre Baskerville</DropdownItem>
                  <DropdownItem className='dropdown-item font2' type='button' id='font2' onClick={this.fontPicker}>Uncial Antiqua</DropdownItem>
                  <DropdownItem className='dropdown-item font3' type='button' id='font3' onClick={this.fontPicker}>Shadows Into Light</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <button className='btn btn-dark card-btn' id='updateTattoo'>Update</button>
            <button className='btn btn-dark card-btn' id={tattoo.id} onClick={this.deleteTattooEvent}>delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooCard;
