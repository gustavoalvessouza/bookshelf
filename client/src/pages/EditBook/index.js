import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as BookActions from '../../store/modules/book/actions';

import { booksById } from '../../utils/booksById';

import Navbar from '../../components/Navbar';

import {
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { useStyles } from './styles';

function EditBook(props) {
    const { match } = props;
    const style = useStyles();
    const dispatch = useDispatch();

    const [alertOpen, setAlertOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const bookId = String(decodeURIComponent(match.params.bookId));

        if (bookId == 'undefined' || bookId == null) {
            props.history.push('/');
        }

        const bookData = booksById(Number(bookId))[0];

        setTitle(bookData.title)
        setDescription(bookData.description)
        setAuthor(bookData.author)
        setCategory(bookData.category)
        setImageURL(bookData.imageURL)
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

    function handleAddTitle(e) {
        setTitle(e.target.value)
    }

    function handleAddDescription(e) {
        setDescription(e.target.value)
    }

    function handleAddAuthor(e) {
        setAuthor(e.target.value)
    }

    function handleAddCategory(e) {
        setCategory(e.target.value)
    }

    function handleAddImageURL(e) {
        setImageURL(e.target.value)
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleUpdateBook() {
        const book = {
            title,
            description,
            author,
            category,
            imageURL
        }

        dispatch(BookActions.updateBook(book, Number(decodeURIComponent(match.params.bookId))))

        handleAlertOpen()

        setTimeout(() => { props.history.push(`/book/${Number(decodeURIComponent(match.params.bookId))}`); }, 2000)
    }

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                <img src={imageURL} className={style.addBookIcon} alt="New Book Icon" />

                <Card style={{ width: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" noWrap>
                            Edit your book
                            </Typography>

                        <form noValidate autoComplete="off">
                            <Grid container spacing={3} className={style.formBody}>
                                <Grid item sm={6} xs={12} >
                                    <TextField
                                        id="outlined-basic"
                                        label="Book title"
                                        value={title}
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddTitle}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        value={description}
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddDescription}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Author"
                                        value={author}
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddAuthor}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Image URL"
                                        value={imageURL}
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddImageURL}
                                        required
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <FormControl variant="outlined" className={style.categorySelect}>
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            label="Category"
                                            onChange={handleAddCategory}
                                        >
                                            <MenuItem value='reading'>Reading</MenuItem>
                                            <MenuItem value='wantToRead'>Want to read</MenuItem>
                                            <MenuItem value='read'>Read</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>

                        <Button
                            variant="contained"
                            color="primary"
                            className={style.addButton}
                            onClick={handleUpdateBook}
                        >
                            Save
                        </Button>
                    </CardContent>
                </Card>

                <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success">
                        Book edited with success!
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}

export default EditBook;