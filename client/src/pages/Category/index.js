import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';

import { booksByCategory } from '../../utils/booksByCategory'
import { categoryName } from '../../utils/categoryName'

import Book from '../../components/Book'
import Navbar from '../../components/Navbar'

import { useStyles } from './styles'
import emptySvg from '../../assets/images/empty.svg'

export default function Category(props) {
    const { match } = props;
    const style = useStyles();

    const category = String(decodeURIComponent(match.params.category));

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                {booksByCategory(category).length > 0
                    ?
                    <Box>
                        <h2 className={style.categoryTitle}>{categoryName(category)}</h2>
                    </Box>
                    :
                    booksByCategory(null).length > 0
                        ? <h2 className={style.categoryTitle}>Books without category</h2>
                        :
                        <Grid container spacing={3}>
                            <Box className={style.noBooksContainer}>
                                <h2 className={style.noBooksTitle}>No books with this category</h2>
                                <img src={emptySvg} alt="No books with this category" className={style.noBooks} />
                            </Box>
                        </Grid>
                }

                <Grid container spacing={3}>
                    {booksByCategory(category).length > 0
                        ? booksByCategory(category)
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        description={book.description}
                                        imageURL={book.imageURL}
                                    />
                                </Grid>
                            )
                        :
                        booksByCategory(null)
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        description={book.description}
                                        imageURL={book.imageURL}
                                    />
                                </Grid>
                            )
                    }
                </Grid>
            </Container>
        </>
    );
};