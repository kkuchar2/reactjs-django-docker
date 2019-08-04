import React, {Component} from 'react';

import Grid from "@material-ui/core/Grid";
import TextInputField from "../../fields/TextInputField";
import PasswordInputField from "../../fields/PasswordInputField";
import SubmitButton from "../../buttons/SubmitButton";
import ErrorText from "../../errors/ErrorText";
import APIRequest from "../../common/APIRequest";
import Cookies from 'universal-cookie';
import PrivacyPolicy from "../../privacy_policy/PrivacyPolicy";
import FacebookButton from "../../buttons/social/FacebookButton";
import GoogleButton from "../../buttons/social/GoogleButton";

import "./LoginForm.scss"

const cookies = new Cookies();

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            formError: ''
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.login = this.login.bind(this);
        this.onLoginResponse = this.onLoginResponse.bind(this);
        this.onLoginError = this.onLoginError.bind(this);

        this.apiRequest = new APIRequest("login/", this.onLoginResponse, this.onLoginError);
    }

    renderFormError() {
        const error = this.state.formError;

        if (error !== undefined && error !== "") {
            return <ErrorText text={error}/>;
        }
    }

    onEmailChange(event) {
        this.setState({emailError: "", passwordError: "", formError: "", email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({emailError: "", passwordError: "", formError: "", password: event.target.value});
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.login();
    }

    login() {
        this.apiRequest.call({
            "email": this.state.email,
            "password": this.state.password
        });
    }

    onLoginResponse(data) {
        console.log("Response: " + JSON.stringify(data));
        cookies.set('key', data["key"], { path: '/', secure: true, sameSite: true });
    }

    onLoginError(error) {
        console.log(error);
    }

    render() {
        return (
            <Grid className={"loginFormContentGrid"} container>
                <form onSubmit={this.onSubmitForm}>

                    <Grid spacing={2} container>

                        <div className={"title"}>Welcome</div>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <TextInputField
                                classname={"emailUsernameField"}
                                name={"email"}
                                value={this.state.email}
                                placeholder={"E-mail"}
                                onChange={this.onEmailChange}
                                errorText={() => {
                                }}>
                            </TextInputField>

                        </Grid>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <PasswordInputField
                                classname={"passwordField"}
                                name={"password"}
                                placeholder={"Password"}
                                onChange={this.onPasswordChange}
                                errorText={() => {
                                }}>
                            </PasswordInputField>

                        </Grid>

                        <Grid className={"rememberForgot"} style={{padding: 0}} item>
                            <div className={"remember"}>
                                <input type="checkbox" className="myinput"/>
                                <div className={"rememberMe"}>Remember me</div>
                            </div>
                            <div className={"forget"}>
                                <a className={"forgotPasswordLink"} href={"/"}>Forgot password?</a>
                            </div>
                        </Grid>

                        <Grid className="buttons" justify="center" alignItems="center" container>

                            <SubmitButton
                                className={"signInButton"}
                                onClick={this.onSubmitForm}
                                content={"Sign in"}>
                            </SubmitButton>

                            <GoogleButton/>
                            <FacebookButton/>

                        </Grid>

                        <PrivacyPolicy/>

                        <Grid className={"notamember"} style={{padding: 0}} item>
                            <div className={"question"}>Not a member?</div>
                            <div className={"createAccount"}>
                                <a className={"createAccountLink"} href={"/signin"}>Create account</a>
                            </div>
                        </Grid>

                    </Grid>
                </form>
            </Grid>
        );
    }
}

export default LoginForm;