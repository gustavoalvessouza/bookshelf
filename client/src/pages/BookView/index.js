import React, { useEffect, useState } from 'react'

import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';

import { booksById } from '../../utils/booksById'

import Navbar from '../../components/Navbar'
import Comments from '../../components/Comments'

import { useStyles } from './styles'

export default function Book(props) {
    const { match } = props;
    const style = useStyles();

    const [book, setBook] = useState({})

    useEffect(() => {
        const bookId = String(decodeURIComponent(match.params.bookId));

        if (bookId === 'undefined' || bookId === null) {
            props.history.push('/');
        }

        const bookData = booksById(Number(bookId))[0];

        setBook(bookData)
    }, [])

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
            </Container>
        </>
    )
}
