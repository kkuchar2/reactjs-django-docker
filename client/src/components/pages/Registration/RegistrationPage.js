import React, {Component} from 'react';
import ModalDialog from "../../dialog/ModalDialog";
import Grid from "@material-ui/core/Grid";
import RegistrationForm from "../../forms/registration/RegistrationForm";

import "./RegistrationPage.scss"

class RegistrationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            uid: '',
            token: '',
            lastCookie: '',
        };

        this.closeDialog = this.closeDialog.bind(this);
        this.showDialog = this.showDialog.bind(this);
    }

    showDialog() {
        this.setState({showDialog: true})
    }

    closeDialog() {
        this.setState({showDialog: false})
    }

    renderDialog() {
        if (this.state.showDialog) {
            return <ModalDialog onClose={this.closeDialog}/>;
        }
    }

    render() {
        return (
            <div className={"registrationPage"}>
                <div className={"background"}/>
                <Grid className={"containerMain"} justify="center" alignItems="center" container>
                    <Grid className={"gridMain"} zeroMinWidth item>
                         <RegistrationForm />
                    </Grid>
                </Grid>
                {this.renderDialog()}
            </div>
        );
    }
}

export default RegistrationPage;
