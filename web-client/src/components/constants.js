import {Home as homeIcon, LocalOffer as itemIcon, Speed as unitIcon, Storage as stockIcon} from "@material-ui/icons";

export const DRAWER_WIDTH = 240;

const menus = [
    {
        path: '/',
        icon: homeIcon,
        label: 'Consumer'
    },
    {
        path: '/province',
        icon: itemIcon,
        label: 'Provience'
    },
    {
        path: '/contraception',
        icon: unitIcon,
        label: 'Contraception'
    }
];

export default menus;
