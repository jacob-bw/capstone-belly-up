import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

import './Auth.scss';

class Auth extends React.Component {
  static propTypes= {
    authed: PropTypes.bool,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    const authed = this.props;
    return (
      <div className="Auth">
        {
          <button className="btn btn-danger" onClick={this.loginClickEvent}><FontAwesomeIcon id="loginBtn" icon={faGooglePlusSquare}/> Login with Google</button>
        }
      </div>
    );
  }
}

export default Auth;
