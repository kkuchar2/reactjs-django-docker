import React, {Component} from "react";
import "./IconButton.scss"
import Image from "../image/image";

class IconButton extends Component {
    render() {

        let props = this.props;

        return (
            <button
                className={["IconButton", props.className].join(" ")}
                type={"submit"}
                onClick={props.onClick}>
                <div className={"group"}>
                    <Image className={"buttonIcon"} src={props.icon} width={props.iconWidth} height={props.iconHeight}/>
                    <div className={"buttonText"}>{props.content}</div>
                </div>
            </button>
        )
    }
}

export default IconButton;