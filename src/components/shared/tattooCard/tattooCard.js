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
          {/* <UncontrolledDropdown>
              <DropdownToggle className='btn btn-dark dropdown-toggle card-btn align-middle' id='dropdownMenu3' nav caret>
                New Belly
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='dropdown-item belly1' type='button' id='belly1' onClick={this.tumPicker}><img src="https://i.imgur.com/tUVzOw5.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly2' type='button' id='belly2' onClick={this.tumPicker}><img src="https://i.imgur.com/dYVeIRv.jpg" alt=" "></img></DropdownItem>
                <DropdownItem className='dropdown-item belly3' type='button' id='belly3' onClick={this.tumPicker}><img src="https://i.imgur.com/Fw8ul6U.jpg" alt=" "></img></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
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
            <button className='btn btn-dark card-btn' id='updateBtn' onClick={this.updateTattoo}>Update</button>
            <button className='btn btn-dark card-btn' id={tattoo.id} onClick={this.deleteTattooEvent}>delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TattooCard;
