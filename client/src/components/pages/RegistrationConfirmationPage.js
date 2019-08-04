import React, {Component} from 'react';

/**
 * Temporary solution to store registration confirmation token
 * for entire application.
 *
 * TODO: Use cookies
 */
class RegistrationConfirmationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uid: props.match.params.uid,
            token: props.match.params.token,
        };
    }

    componentDidMount() {
        localStorage.setItem('uid', this.state.uid);
        localStorage.setItem('token', this.state.token);
    }

    render() {
        return (<div />);
    }
}

export default RegistrationConfirmationPage;
