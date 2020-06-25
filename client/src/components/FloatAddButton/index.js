import React from 'react'

import { Link, BrowserRouter } from 'react-router-dom'

import Fab from '@material-ui/core/Fab';

import { useStyles } from './styles'
import AddIcon from '@material-ui/icons/Add';

function FloatAddButton() {
    const classes = useStyles();

    const fab = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        label: 'Add'
    }

    return (

        <BrowserRouter>
            <Link to="/new">
                <Fab aria-label={fab.label} className={fab.className} color={fab.color} style={{ background: '#2161CC' }}>
                    {fab.icon}
                </Fab>
            </Link>
        </BrowserRouter>

    )
};

export default FloatAddButton