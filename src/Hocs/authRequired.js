import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default function AuthRequired(ComposedComponent) {
    class Authenticated extends Component {
        componentWillMount() {
            if (!localStorage.login) this.props.history.push("/logIn")
        }
        render() {
            return (
                <ComposedComponent />
            );
        }
    }
    return withRouter(Authenticated);
}