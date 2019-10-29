import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {observer} from "mobx-react";
import Institutions from "./stores/Institutions";

const vuggestuer = new Institutions();

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
<br/>
asdasdasdklnsdnvsdnvnsdn
        </a>


      </header>
    </div>
  );
}

export default observer(App);
