import React, {Component} from "react";


import IconButton from "../IconButton";

import "./SocialButtons.scss"

class FacebookButton extends Component {
    render() {
        return (
            <IconButton
                className={"facebookButton"}
                onClick={this.props.onClick}
                icon={process.env.PUBLIC_URL + '/fb_icon.png'}
                content={"Continue with Facebook"}>
            </IconButton>
        )
    }
}

export default FacebookButton;