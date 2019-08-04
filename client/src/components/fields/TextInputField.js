import React, {Component} from "react";

import ErrorText from "../errors/ErrorText";

import "./TextInputField.scss"

class TextInputField extends Component {

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
                    type={"text"}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}>
                </input>

               { this.renderError() }

            </div>
        )
    }
}

export default TextInputField;