import React from 'react';

import { Link } from 'react-router-dom'

import {
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useTheme
} from '@material-ui/core'

import { useStyles } from './styles'

import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import FilterListIcon from '@material-ui/icons/FilterList';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <>
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button key="Home">
                        <HomeIcon color="action" className={classes.homeIcon} />
                        <ListItemText primary="Home" className={classes.linkText} />
                    </ListItem>
                </Link>

                <Link to="/books/category" className={classes.link}>
                    <ListItem button key="Home">
                        <FilterListIcon color="action" className={classes.categoryIcon} />
                        <ListItemText primary="Filter books" className={classes.linkText} />
                    </ListItem>
                </Link>

                <Link to="/books/add" className={classes.link}>
                    <ListItem button key="Home">
                        <BookIcon color="action" className={classes.bookIcon} />
                        <ListItemText primary="Add new book" className={classes.linkText} />
                    </ListItem>
                </Link>
            </List>
        </>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link to="/" className={classes.link}>Bookshelf</Link>
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden mdDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}