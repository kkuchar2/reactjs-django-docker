import React, {Component} from "react";
import { Image } from "react-native-web";

import "./image.scss"

class ImageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { source: { uri: this.props.uri } };
    }

    componentWillMount() {
        Image.getSize(this.props.uri, (width, height) => {
            if (this.props.width && !this.props.height) {
                this.setState({
                    width: this.props.width,
                    height: height * (this.props.width / width)
                });
            } else if (!this.props.width && this.props.height) {
                this.setState({
                    width: width * (this.props.height / height),
                    height: this.props.height
                });
            } else {
                this.setState({ width: width, height: height });
            }
        });
    }

    render() {
        return (
            <Image className={"Image"}
                 source={this.state.source}
                 style={{ height: "100%", width: "100%" }}
                 alt=''
            />
        )
    }
}

export default ImageComponent;