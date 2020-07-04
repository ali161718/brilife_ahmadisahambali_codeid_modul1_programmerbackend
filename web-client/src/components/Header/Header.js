import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "./styles";
import PropTypes from "prop-types";
import clsx from "clsx";

class Header extends Component {

    render() {
        const {classes, title, open, handleDrawerOpen} = this.props;

        return (
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
            >
                <Toolbar>
                    <IconButton
                        id={"menu-button"}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography id={"titleLabel"} variant="h6" noWrap className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

        );
    }
}

Header.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(Header);