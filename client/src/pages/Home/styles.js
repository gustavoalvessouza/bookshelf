import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    root: {
        marginTop: '5.5rem',
        marginBottom: '2rem'
    },
    noBooks: {
        maxWidth: '50%',
        marginTop: '3rem',
        marginBottom: '5rem',
        margin: '0 auto'
    },
    noBooksTitle: {
        marginTop: '10rem',
        color: '#2161CC',
        textAlign: 'center',
    },
    noBooksContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    categoryTitle: {
        marginTop: '1.5rem',
        marginBottom: '1rem',
        color: '#4F4F4F'
    },
    categoryBox: {
        marginTop: '2.5rem'
    },
    link: { textDecoration: 'none' }
});