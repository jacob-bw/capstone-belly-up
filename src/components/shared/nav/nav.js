import React from 'react';
import {
  Nav,
  NavbarBrand,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import Auth from '../../pages/Auth/Auth';

import './nav.scss';

// Saturday Help Notes:
// get help w/ routing
// get help w/ navbar img selection function
// CRUD is all that remains after those two functions and should be relatively straightforward
// get help w/ how to toggle on logout/login.
// toggle navbar login button and 'save' button on tattoo card

class MyNav extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
    dropdownOpen: PropTypes.bool,
  };

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <div className='navbar-nav'>
            <Nav pills>
              {/* <UncontrolledDropdown >
                <DropdownToggle id='bellyMenu' nav caret>
                  Choose New Belly
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='bellyImg' id='belly1' onClick={this.bellyPicker}><img src='https://i.imgur.com/tUVzOw5.jpg' alt='belly 1'></img></DropdownItem>
                  <DropdownItem className='bellyImg' id='belly2' onClick={this.bellyPicker}><img src='https://i.imgur.com/dYVeIRv.jpg' alt='belly 2'></img></DropdownItem>
                  <DropdownItem className='bellyImg' id='belly3' onClick={this.bellyPicker}><img src='https://i.imgur.com/Fw8ul6U.jpg' alt='belly3'></img></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                {authed && (
                  <Link
                    className='nav-link logoutBtn'
                    to='/auth'
                    onClick={this.logMeOut}
                  >
                    <FontAwesomeIcon id='logoutBtn' icon={faGooglePlusSquare} />
                  </Link>
                )}
              </NavItem>
            </Nav>
          </div>
        );
      }

      return <ul className='navbar-nav'></ul>;
    };

    return (
      <div className='MyNavbar'>
        <nav className='navbar'>
        {/* <nav className='navbar navbar-expand-md navbar-light'> */}
          <NavItem>
            <Link className='nav-link' to='/saved' alt='saved'>
              <FontAwesomeIcon id='saveBtn' icon={faBook} />
            </Link>
          </NavItem>
          <NavbarBrand href='/home' className=''>
            Belly Up
          </NavbarBrand>
          {/* <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}

          <div className='' id='navbarSupportedContent'>
          {/* <div className='collapse navbar-collapse' id='navbarSupportedContent'> */}
            {buildNavbar()}
          </div>
          {!authed && <Auth />}
        </nav>
      </div>
    );
  }
}

export default MyNav;
