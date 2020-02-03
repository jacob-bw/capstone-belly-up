import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';


import Auth from '../components/pages/Auth/Auth';
import firebaseConnection from '../helpers/data/authData';
import TattooWord from '../components/pages/Word/Word';
import MyNav from '../components/shared/nav/nav';
import Saved from '../components/pages/Saved/Saved';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }}/>);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }}/>);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <MyNav authed={authed}/>
          <Switch>
            <PublicRoute path="/home" exact component={Auth} authed={authed}/>
            <TattooWord path="/" exact component={TattooWord} authed={authed}/>
            <PrivateRoute path="/saved" exact component={Saved} authed={authed}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
