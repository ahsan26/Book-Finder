import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import {setLogged} from "../Actions/auth";
import{connect} from "react-redux";
import {databaseRef} from "../firebase";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.changeVal = this.changeVal.bind(this);
    }
    changeVal(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    signUp= () => {
        if (this.state.password && this.state.email) {
            databaseRef.child('users').push({
                email:this.state.email,
                password: this.state.password
            });
            this.props.setLogged();
            this.props.history.push("/dashboard");
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.signUp}>
                    <TextField
                        id="name"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.changeVal}
                        margin="normal"
                        name="email"
                    />
                    <br />
                    <TextField
                        id="name"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.changeVal}
                        margin="normal"
                        name="password"
                    />
                    <br />
                    <Button variant="contained" className={classes.button}>
                        SignUp  
                </Button>
                </form>
            </div>
        );
    }
}

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: "#22B14C",
        color: "#fff"
    }
});

SignUp.propTypes = {
    classes: PropTypes.object.isRequired
}

export default connect(null, {setLogged})(withStyles(styles)(SignUp));