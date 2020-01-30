import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

class MyNav extends React.Component {
  static propTypes= {
    authed: PropTypes.bool,
    dropdownOpen: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }


  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <div>
            <Nav pills>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Choose New Belly
                </DropdownToggle>
                <DropdownMenu>
                  {/* ask/find out how to toggle 'disabled' attribute on a component */}
                  <DropdownItem>BellyImg One</DropdownItem>
                  <DropdownItem>BellyImg Two</DropdownItem>
                  <DropdownItem>BellyImg Three</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="nav-link saved" to="/saved"><FontAwesomeIcon icon={faBook}/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="" onClick={this.logMeOut}><FontAwesomeIcon icon={faGooglePlusSquare}/></NavLink>
              </NavItem>
            </Nav>
          </div>
        );
        // <ul className="navbar-nav ml-auto">
        //   <li className="nav-item">
        //     <Link className="nav-link saved" to="/saved"><FontAwesomeIcon icon={faBook}/></Link>
        //   </li>
        //   <li className="nav-item">
        //     <div className="dropdown">
        //       <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Change Belly
        //       </button>
        //       <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        //         <button className="dropdown-item" type="button" id="belly1">Belly Image 1</button>
        //         <button className="dropdown-item" type="button" id="belly2">Belly Image 2</button>
        //         <button className="dropdown-item" type="button" id="belly3">Belly Image 3</button>
        //       </div>
        //     </div>
        //   </li>
        //   <li className="nav-item">
        //     <button className="btn btn-danger" onClick={this.logMeOut}><FontAwesomeIcon icon={faGooglePlusSquare}/></button>
        //   </li>
        // </ul>
      }

      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Belly Up</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { buildNavbar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;
