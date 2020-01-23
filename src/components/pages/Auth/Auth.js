import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import fab from '@fortawesome/free-solid-svg-icons';

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
        <h1>Auth Page</h1>
        <button className="btn btn-danger" onClick={this.loginClickEvent}>login</button>
      </div>
    );
  }
}

export default Auth;
