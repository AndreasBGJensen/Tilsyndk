import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {observer} from "mobx-react";
import Institutions from "./stores/Institutions";
import LogIn from "./comtainer/LogIn";
import Register from "./comtainer/Register"
import {HashRouter as Router,Route} from "react-router-dom";
import SearchInstitution from "./comtainer/SearchInstitution"

import {Switch} from "react-router-dom"
import Container from "react-bootstrap/Container";

const vuggestuer = new Institutions();

class App extends React.Component{

render()
    {
        return (




            <Container>
                <Router>
                    <Switch>
                        <Route path={"/register"} component={Register}/>
                        <Route path={"/login"} component={LogIn}/>
                        <Route path={"/search"} component={SearchInstitution}/>
                    </Switch>
                </Router>
            </Container>
        )
    }

}

export default observer(App);
