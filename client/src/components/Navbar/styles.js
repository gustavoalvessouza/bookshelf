import { makeStyles } from '@material-ui/core'

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#2161CC'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    homeIcon: { marginRight: '10px', color: '#2161CC'  },
    categoryIcon: { marginRight: '10px', color: '#2161CC'  },
    bookIcon: { marginRight: '10px', color: '#2161CC' },
}));