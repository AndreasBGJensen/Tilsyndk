import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {observer} from "mobx-react";
import Institutions from "./stores/Institutions";
import LogIn from "./comtainer/LogIn";
import Register from "./comtainer/Register"
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {TokenStore} from "./stores/TokenStore";
import InstitutionView from './comtainer/InstitutionView'


const tokenStore = new TokenStore();
const vuggestuer = new Institutions();

function App() {
  return (
    <div className="App">
      <header className="App-header">

            <InstitutionView/>
          <Register/>

      </header>
    </div>
  );
}

export default observer(App);
