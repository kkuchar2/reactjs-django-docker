import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'

import Grid from "@material-ui/core/Grid";
import TextInputField from "../../fields/TextInputField";
import PasswordInputField from "../../fields/PasswordInputField";
import SubmitButton from "../../buttons/SubmitButton";
import APIRequest from "../../common/APIRequest";
import PrivacyPolicy from "../../privacy_policy/PrivacyPolicy";

import "./RegistrationForm.scss"

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password1: '',
            password2: '',
            emailError: '',
            usernameError: '',
            password1Error: '',
            password2Error: '',
            formError: ''
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPassword1Change = this.onPassword1Change.bind(this);
        this.onPassword2Change = this.onPassword2Change.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.register = this.register.bind(this);
        this.onRegistrationResponse = this.onRegistrationResponse.bind(this);
        this.onRegistrationError = this.onRegistrationError.bind(this);

        this.apiRequest = new APIRequest("registration/", this.onRegistrationResponse, this.onRegistrationError);
    }

    onEmailChange(event) {
        this.setState({ emailError: "", email: event.target.value });
    }

    onUsernameChange(event) {
        this.setState({ usernameError: "", username: event.target.value })
    }

    onPassword1Change(event) {
        this.setState({ password1Error: "", password1: event.target.value });
    }

    onPassword2Change(event) {
        this.setState({ password2Error: "", password2: event.target.value });
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.register();
    }

    register() {
        this.apiRequest.call({
            "email": this.state.email,
            "username": this.state.username,
            "password1": this.state.password1,
            "password2": this.state.password2
        });
    }

    onRegistrationResponse(data) {
        console.log("Registration response:");
        console.log(data);
        this.props.history.push("/");
    }

    onRegistrationError(error) {
        console.log(error);
    }

    render() {
        return (
            <Grid style={{ padding: 0 }} className={"registrationFormContentGrid"} container>

                <form style={{width: "100%", padding: 0 }} onSubmit={this.onSubmitForm}>
                    <Grid style={{width: "100%", padding: 10, margin: 0 }} spacing={2} container>

                        <div className={"title"}>Create account</div>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <TextInputField
                                className={"emailField"}
                                name={"email"}
                                placeholder={"E-mail"}
                                onChange={this.onEmailChange}
                                errorText={this.state.emailError}>
                            </TextInputField>

                        </Grid>

                          <Grid className={"field"} style={{padding: 0}} item>

                            <TextInputField
                                className={"usernameField"}
                                name={"username"}
                                placeholder={"Username"}
                                onChange={this.onUsernameChange}
                                errorText={this.state.usernameError}>
                            </TextInputField>

                        </Grid>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <PasswordInputField
                                className={"passwordField1"}
                                id={"password1"}
                                name={"password1"}
                                placeholder={"Password"}
                                errorText={this.state.password1Error}
                                onChange={this.onPassword1Change}>
                            </PasswordInputField>

                        </Grid>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <PasswordInputField
                                className={"passwordField2"}
                                id={"password2"}
                                name={"password2"}
                                placeholder={"Password (confirm)"}
                                errorText={this.state.password2Error}
                                onChange={this.onPassword2Change}>
                            </PasswordInputField>

                        </Grid>

                        <Grid className="buttons" justify="center" alignItems="center" container>

                            <SubmitButton
                                className={"registerButton"}
                                content={"Register"}
                                onClick={this.onSubmitForm}>
                            </SubmitButton>
                        </Grid>

                        <PrivacyPolicy />

                        <Grid className={"alreadymemeber"} style={{padding: 0}} item>
                            <div className={"question"}>Already a member?</div>
                            <div className={"signInReturn"}>
                                <a href={"/"}>Sign in</a>
                            </div>
                        </Grid>

                    </Grid>
                </form>
            </Grid>
        );
    }
}

export default withRouter(RegistrationForm);