import React from 'react'

import Fab from '@material-ui/core/Fab';

import { useStyles } from './styles'
import AddIcon from '@material-ui/icons/Add';

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