import React, {Component} from "react";

import "./SubmitButton.scss"

class SubmitButton extends Component {
    render() {
        return (
             <button
                 className={["SubmitButton", this.props.className].join(" ")}
                 type={"submit"}
                 onClick={this.props.onClick}>{this.props.content}</button>
        )
    }
}

export default SubmitButton;