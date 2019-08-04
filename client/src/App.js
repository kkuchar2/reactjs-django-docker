import React, {Component} from 'react';

import './App.scss';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import RegistrationConfirmationPage from "./components/pages/RegistrationConfirmationPage";

import LoginPage from "./components/pages/Login/LoginPage";
import RegistrationPage from "./components/pages/Registration/RegistrationPage";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path='/' component={LoginPage} />
                  <Route exact path='/signin' component={RegistrationPage} />
                  <Route exact path='/api/activate/:uid/:token' component={RegistrationConfirmationPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
