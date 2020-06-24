import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function Book() {
    const classes = useStyles();

    const fab = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        label: 'Add',
    }

    return (
        <>
            <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                {fab.icon}
            </Fab>
        </>
    )
};