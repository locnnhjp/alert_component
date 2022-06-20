import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Alert extends React.Component {
    render() {
        return (
            <div className="alert alert-primary" role="alert">
                {this.props.text}
            </div>
        )
    }
}

export default Alert