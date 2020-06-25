import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '5.5rem',
        marginBottom: '4rem'
    },
    addBookIcon: {
        maxWidth: '30%',
        marginTop: '1.5rem',
        marginBottom: '2rem',
        margin: '0 auto'
    },
    form: {
        width: '100%'
    },
    formBody: {
        marginTop: '1rem'
    },
    categorySelect: {
        width: '100%'
    },
    addButton: {
        marginTop: '10px',
        background: '#2161CC'
    }
});