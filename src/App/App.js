import React from 'react';

import logo from './logo.svg';

import './App.scss';

import wordFunc from '../helpers/data/wordData';

wordFunc.getRandomWord().then(console.log);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button className="btn btn-warning">Burp</button>
      </header>
    </div>
  );
}

export default App;
