import {DRAWER_WIDTH} from "../constants";

const styles = theme => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    paper: {
        backgroundColor: "blue"
    },
    drawerOpen: {
        width: DRAWER_WIDTH,
        backgroundColor: "#bdbdbd",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: "#bdbdbd",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    nav: {
        textDecoration: "none",
        fontFamily: "arial",
        color: "black"
    },
    icon:{
        color: "red"
    }
});

export default styles;