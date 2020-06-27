import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'

import Book from '../../components/Book'
import Navbar from '../../components/Navbar'

import { useStyles } from './styles'
import readingSvg from '../../assets/images/reading.svg'

export default function Home() {
    const style = useStyles();

    const booksByCategory = category => {
        return books.filter(book => book.category === category)
    }

    const books = [
        { id: 1, title: 'Clean Code', description: 'Descrição', category: null, image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
        { id: 2, title: 'Clean Code', description: 'Descrição', category: null, image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
    ]

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                <Grid container spacing={3}>
                    {booksByCategory(null).length > 0
                        ? booksByCategory(null)
                            .map(book =>
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

                {booksByCategory('reading').length > 0
                    ?
                    <Box>
                        <Link to="/books/category" className={style.link}><h2 className={style.categoryTitle}>Reading</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('reading').length > 0
                        ? booksByCategory('reading')
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        description={book.description}
                                        image={book.image}
                                    />
                                </Grid>
                            )
                        : null
                    }
                </Grid>

                {booksByCategory('wantToRead').length > 0
                    ?
                    <Box>
                        <Link to="/books/category" className={style.link}><h2 className={style.categoryTitle}>Want to read</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('wantToRead').length > 0
                        ? booksByCategory('wantToRead')
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        description={book.description}
                                        image={book.image}
                                    />
                                </Grid>
                            )
                        : null
                    }
                </Grid>

                {booksByCategory('read').length > 0
                    ?
                    <Box>
                        <Link to="/books/category" className={style.link}><h2 className={style.categoryTitle}>Read</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('read').length > 0
                        ? booksByCategory('read')
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Book
                                        key={book.id}
                                        title={book.title}
                                        description={book.description}
                                        image={book.image}
                                    />
                                </Grid>
                            )
                        : null
                    }
                </Grid>
            </Container>
        </>
    );
};