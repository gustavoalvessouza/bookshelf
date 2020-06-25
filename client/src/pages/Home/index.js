import React from 'react';

import { Container, Grid } from '@material-ui/core';

import Book from '../../components/Book'

import { useStyles } from './styles'
import readingSvg from '../../assets/images/reading.svg'

export default function Home() {
    const style = useStyles();

    const books = []

    return (
        <>
            <Container maxWidth="md" className={style.root}>
                <Grid container spacing={3}>
                    {books.length > 0
                        ? books.map(book =>
                            <Grid item sm={4} xs={6}>
                                <Book
                                    key={book.id}
                                    title={book.title}
                                    description={book.description}
                                    image={book.image}
                                />
                            </Grid>
                        )
                        : <img src={readingSvg} alt="No books" className={style.noBooks} />
                    }
                </Grid>
            </Container>

        </>
    );
};