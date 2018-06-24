import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class Navigation extends React.Component {
    goToThatRoute(route){
        this.props.history.push(route);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: "#22B14C" }}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                </Typography>
                        <Button color="inherit" onClick={this.goToThatRoute.bind(this, '/logIn')}>Login</Button>
                        <Button color="inherit" onClick={this.goToThatRoute.bind(this, '/signUp')}>SignUp</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigation));