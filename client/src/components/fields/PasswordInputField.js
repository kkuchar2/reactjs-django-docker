import React, {Component} from "react";

import "./PasswordInputField.scss"
import ErrorText from "../errors/ErrorText";

class PasswordInputField extends Component {

  renderError() {
        const errorText = this.props.errorText;

        if (errorText !== undefined && errorText !== "") {
            return <ErrorText text={errorText} />;
        }
    }

    render() {
        return (
            <div className={this.props.classname}>
                <input
                    type={"password"}
                    id={"password"}
                    name={"password"}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}>
                </input>

                { this.renderError() }
            </div>
        )
    }
}

export default PasswordInputField;