import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

class LogIn extends React.Component {
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
    logIn=()=>{
        if(this.state.password && this.state.email){
            this.props.history.push("/dashboard");
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <form onSubmit={this.logIn}>
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
                        LogIn
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

LogIn.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LogIn);