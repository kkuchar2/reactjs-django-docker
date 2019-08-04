import React, {Component} from 'react';

import Grid from "@material-ui/core/Grid";
import TextInputField from "../../fields/TextInputField";
import PasswordInputField from "../../fields/PasswordInputField";
import SubmitButton from "../../buttons/SubmitButton";
import ErrorText from "../../errors/ErrorText";
import APIRequest from "../../common/APIRequest";

import "./RegistrationForm.scss"
import PrivacyPolicy from "../../privacy_policy/PrivacyPolicy";

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password1: '',
            password2: '',
            emailError: '',
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

    renderFormError() {
        const error = this.state.formError;

        if (error !== undefined && error !== "") {
            return <ErrorText text={error}/>;
        }
    }

    onEmailChange(event) {
        this.setState({ emailError: "", passwordError: "", formError: "", email: event.target.value });
    }

    onUsernameChange(event) {
        this.setState({ emailError: "", passwordError: "", formError: "", username: event.target.value })
    }

    onPassword1Change(event) {
        this.setState({ emailError: "", password1Error: "", formError: "", password1: event.target.value });
    }

    onPassword2Change(event) {
        this.setState({ emailError: "", password1Error: "", formError: "", password2: event.target.value });
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
    }

    onRegistrationError(error) {
        console.log(error);
    }

    render() {
        return (
            <Grid className={"registrationFormContentGrid"} container>

                <form onSubmit={this.onSubmitForm}>

                    <Grid spacing={2} container>

                        <div className={"title"}>Create account</div>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <TextInputField
                                classname={"emailField"}
                                name={"email"}
                                value={this.state.email}
                                placeholder={"E-mail"}
                                onChange={this.onEmailChange}
                                errorText={() => {}}>
                            </TextInputField>

                        </Grid>

                          <Grid className={"field"} style={{padding: 0}} item>

                            <TextInputField
                                classname={"usernameField"}
                                name={"username"}
                                value={this.state.username}
                                placeholder={"Username"}
                                onChange={this.onUsernameChange}
                                errorText={() => {}}>
                            </TextInputField>

                        </Grid>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <PasswordInputField
                                classname={"passwordField1"}
                                name={"password1"}
                                value={this.state.password1}
                                placeholder={"Password"}
                                onChange={this.onPassword1Change}
                                errorText={() => {}}>
                            </PasswordInputField>

                        </Grid>

                        <Grid className={"field"} style={{padding: 0}} item>

                            <PasswordInputField
                                classname={"passwordField2"}
                                name={"password2"}
                                value={this.state.password2}
                                placeholder={"Password (confirm)"}
                                onChange={this.onPassword2Change}
                                errorText={() => {}}>
                            </PasswordInputField>

                        </Grid>

                        <Grid className="buttons" justify="center" alignItems="center" container>

                            <SubmitButton
                                className={"registerButton"}
                                onClick={this.onSubmitForm}
                                content={"Register"}>
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

export default RegistrationForm;