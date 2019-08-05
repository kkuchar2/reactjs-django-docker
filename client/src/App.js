import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import RegistrationConfirmationPage from "./components/pages/RegistrationConfirmationPage";
import LoginPage from "./components/pages/Login/LoginPage";
import RegistrationPage from "./components/pages/Registration/RegistrationPage";


import './App.scss';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={LoginPage} />
                  <Route exact path='/signin' component={RegistrationPage} />
                  <Route exact path='/api/activate/:uid/:token' component={RegistrationConfirmationPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
