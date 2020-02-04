import React from 'react';
import {
  Nav,
  NavbarBrand,
  NavItem,
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
          <NavItem>
            <Link className='nav-link' to='/saved' alt='saved'>
              <FontAwesomeIcon id='saveBtn' icon={faBook} />
            </Link>
          </NavItem>
          <NavbarBrand href='/home' className=''>
            Belly Up
          </NavbarBrand>
          <div className='' id='navbarSupportedContent'>
            {buildNavbar()}
          </div>
          {!authed && <Auth />}
        </nav>
      </div>
    );
  }
}

export default MyNav;
