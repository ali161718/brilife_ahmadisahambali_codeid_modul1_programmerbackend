import React, {Component} from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            alertShow: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const {error} = this.props;
        if (prevProps.error !== error) {
            this.setState({alertShow: true});
        }
    }

    hanldeDrawerOpen = () => {
        this.setState({open: true})
    };

    hanldeDrawerClose = () => {
        this.setState({open: false})
    };

    hideAlert = () => {
        this.setState({alertShow: false})
    };

    render() {
        const {children, classes, error} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Header title={"Inventory Application"} open={this.state.open}
                        handleDrawerOpen={this.hanldeDrawerOpen}
                />
                <Navigation open={this.state.open} handleDrawerClose={this.hanldeDrawerClose}

                />
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {children}

                    <Snackbar open={this.state.alertShow} autoHideDuration={6000} onClose={this.hideAlert}>
                        <Alert onClose={this.hideAlert} elevation={6} variant="filled"
                               severity="error">{error?.message}</Alert>
                    </Snackbar>
                </main>
            </div>
        );
    }
}

Page.propTypes = {
    error: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(Page);