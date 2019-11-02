import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import SearchInstitution from './SearchInstitution';
import LogIn from './LogIn';
import About from './About';
import Container from "react-bootstrap/Container";
import Register from './Register'

const routing = (

    <Container>
        <Router>
            <div>
                <Route path="/" component={SearchInstitution} />
                <Route path="/login" component={LogIn} />
                <Route path="/About" component={About} />
                <Route path="/Register" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    </Container>
);