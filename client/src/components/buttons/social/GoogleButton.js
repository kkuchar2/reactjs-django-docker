import React, {Component} from "react";

import IconButton from "../IconButton";

import "./SocialButtons.scss"

class GoogleButton extends Component {
    render() {
        return (
            <IconButton
                className={"googleButton"}
                onClick={this.props.onClick}
                icon={process.env.PUBLIC_URL + "/google.png"}
                content={"Continue with Google"}/>
        )
    }
}

export default GoogleButton;