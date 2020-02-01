import React from 'react';
import savedData from '../../../helpers/data/savedData';

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
      <div>woof</div>
    );
  }
}
// <div className='wordCard'>
//   <div className='card col-md-6'>
//     <div className='tattoo-holder'>
//       <img className='card-img-top' src={ pickedTum } alt=''/>
//       <div className='tattooScript' id='halfOne'><span className={ pickedFont }>{ halfOne }</span></div>
//       <div className='tattooScript' id='halfTwo'><span className={ pickedFont }>{ halfTwo }</span></div>
//     </div>
//   <div className='card-footer'>
//     <div className='buttonHolder'>
//         <UncontrolledDropdown >
//           <DropdownToggle className='btn btn-dark dropdown-toggle card-btn align-middle' id='dropdownMenu2' nav caret>
//             Choose Font
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem className='dropdown-item font1' type='button' id='font1' onClick={this.fontPicker}>Libre Baskerville</DropdownItem>
//             <DropdownItem className='dropdown-item font2' type='button' id='font2' onClick={this.fontPicker}>Uncial Antiqua</DropdownItem>
//             <DropdownItem className='dropdown-item font3' type='button' id='font3' onClick={this.fontPicker}>Shadows Into Light</DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       <button className='btn btn-dark card-btn' id='saveTattoo'>Save</button>
//       <button className='btn btn-dark card-btn' id='tryAgain' onClick={this.splitWord}>Get Inked</button>
//     </div>
//   </div>
// </div>
// </div>


export default Saved;
