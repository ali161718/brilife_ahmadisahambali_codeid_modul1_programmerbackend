import {DRAWER_WIDTH} from '../constants';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#bdbdbd",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        color: "#212121",
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    title: {
        color: "#212121",
        fontFamily: "arial",
        fontWeight: 500
    }
});

export default styles;