import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
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
