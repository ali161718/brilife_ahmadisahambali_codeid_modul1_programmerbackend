import React, {Component} from "react";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText, Button
} from '@material-ui/core';
import {MoveToInbox as InboxIcon} from '@material-ui/icons';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import {Link} from "react-router-dom";
import menus from "../constants";
import clsx from "clsx";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

class Navigation extends Component {

    render() {
        const {classes, theme, open, handleDrawerClose} = this.props;

        return (
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div
                    id={"hafed"} className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {menus.map((menu, index) => (
                        <Link key={'menu' + index} to={menu.path}  className={classes.nav}>
                            <ListItem button>
                                <ListItemIcon>
                                    <menu.icon className={classes.icon}/>
                                </ListItemIcon>
                                <ListItemText primary={menu.label}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        );
    }
}

Navigation.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(Navigation);