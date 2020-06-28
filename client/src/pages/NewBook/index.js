import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as BookActions from '../../store/modules/book/actions'

import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

import Navbar from '../../components/Navbar'

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

import { useStyles } from './styles'

import addBookIcon from '../../assets/icons/addBook.svg'

function NewBook() {
    const style = useStyles();
    const dispatch = useDispatch();

    const [alertOpen, setAlertOpen] = React.useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState(null);
    const [imageURL, setImageURL] = useState('');

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

    function handleAddBook() {
        const book = {
            id: Math.round(Math.random() * (99999 - 1) + 1),
            title,
            description,
            author,
            category,
            imageURL,
            timestamp: Date.now(),
            deleted: false
        }

        dispatch(BookActions.addBook(book))

        handleAlertOpen()
    }

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                <img src={addBookIcon} className={style.addBookIcon} alt="New Book Icon" />

                <Card style={{ width: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" noWrap>
                            Add a new book to yours
                            </Typography>

                        <form noValidate autoComplete="off">
                            <Grid container spacing={3} className={style.formBody}>
                                <Grid item sm={6} xs={12} >
                                    <TextField
                                        id="outlined-basic"
                                        label="Book title"
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddTitle}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddDescription}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Author"
                                        variant="outlined"
                                        className={style.form}
                                        onChange={handleAddAuthor}
                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Image URL"
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
                            onClick={handleAddBook}
                        >
                            Add
                        </Button>
                    </CardContent>
                </Card>

                <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success">
                        Book added with success!
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}

export default NewBook