import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import * as BookActions from '../../store/modules/book/actions'

import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box
} from '@material-ui/core';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { booksById } from '../../utils/booksById'

import Navbar from '../../components/Navbar'
import Comments from '../../components/Comments'

import { useStyles } from './styles'

function Book(props) {
    const { match } = props;
    const dispatch = useDispatch();
    const style = useStyles();

    const [alertOpen, setAlertOpen] = useState(false);

    const [book, setBook] = useState({});
    const [bookId, setBookId] = useState(0);

    useEffect(() => {
        const bookId = String(decodeURIComponent(match.params.bookId));

        if (bookId == 'undefined' || bookId == null) {
            props.history.push('/');
        }

        const bookData = booksById(Number(bookId))[0];

        if (String(bookData) == 'undefined') {
            props.history.push('/');
        }

        setBook(bookData)
        setBookId(bookId)
    }, [])

    const handleAlertOpen = () => {
        setAlertOpen(true);
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertOpen(false);
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleRemoveBook() {
        dispatch(BookActions.removeBook(book.id))

        handleAlertOpen()

        setTimeout(() => { props.history.push('/'); }, 2000)
    }

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                <Grid container spacing={3}>
                    <Grid item sm={4} xs={12} >
                        <CardMedia
                            className={style.media}
                            image={book.imageURL}
                        />

                        <Box style={{ marginTop: '10px' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleRemoveBook}
                                className={style.removeButton}
                                disableElevation
                            >
                                Delete
                            </Button>

                            <Link to={`/edit/${bookId}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    disableElevation
                                >
                                    Edit
                            </Button>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item sm={8} xs={12} >
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <Typography variant="h6">
                                    {book.title}
                                </Typography>

                                <Typography variant="small">
                                    by <strong>{book.author}</strong>
                                </Typography>

                                <br />
                                <br />

                                <Typography variant="p" >
                                    {book.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Comments book={book} />

                <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success">
                        Book was deleted with success!
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}

export default Book;