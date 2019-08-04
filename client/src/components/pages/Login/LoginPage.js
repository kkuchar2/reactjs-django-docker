import React, {Component} from 'react';

import Grid from "@material-ui/core/Grid";
import LoginForm from "../../forms/login/LoginForm";

import "./LoginPage.scss"

class LoginPage extends Component {

    render() {
        return (
            <div className={"loginPage"}>
                <div className={"background"}/>
                <Grid className={"containerMain"} justify="center" alignItems="center" container>
                    <Grid className={"gridMain"} zeroMinWidth item>
                         <LoginForm />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;
