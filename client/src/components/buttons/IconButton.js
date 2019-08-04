import React, {Component} from "react";

import ImageComponent from "../media/image";

import "./IconButton.scss"

class IconButton extends Component {
    render() {

        let props = this.props;

        return (
            <button
                className={["IconButton", props.className].join(" ")}
                type={"submit"}
                onClick={props.onClick}>
                <div className={"group"}>
                    <ImageComponent className={"buttonIcon"} uri={props.icon}/>
                    <div className={"buttonText"}>{props.content}</div>
                </div>
            </button>
        )
    }
}

export default IconButton;