import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { booksByCategory, books } from '../../utils/booksByCategory'

import Book from '../../components/Book'
import Navbar from '../../components/Navbar'

import { useStyles } from './styles'
import readingSvg from '../../assets/images/reading.svg'

function Home() {
    const style = useStyles();

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                {books.length > 0
                    ? null
                    :
                    <Grid container spacing={3}>
                        <Box className={style.noBooksContainer}>
                            <h2 className={style.noBooksTitle}>No books yet</h2>
                            <img src={readingSvg} alt="No books" className={style.noBooks} />
                        </Box>
                    </Grid>
                }

                {booksByCategory(null).length > 0
                    ?
                    <Box className={style.categoryBox}>
                        <Link to="/books/category" className={style.link}><h2 className={style.categoryTitle}>Books without category</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory(null).length > 0
                        ? booksByCategory(null)
                            .sort()
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Link to={`/book/${book.id}`}>
                                        <Book
                                            key={book.id}
                                            title={book.title}
                                            description={book.description}
                                            imageURL={book.imageURL}
                                        />
                                    </Link>
                                </Grid>
                            )
                        : null

                    }
                </Grid>

                {booksByCategory('reading').length > 0
                    ?
                    <Box className={style.categoryBox}>
                        <Link to="/books/category/reading" className={style.link}><h2 className={style.categoryTitle}>Reading</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('reading').length > 0
                        ? booksByCategory('reading')
                            .sort()
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Link to={`/book/${book.id}`}>
                                        <Book
                                            key={book.id}
                                            title={book.title}
                                            description={book.description}
                                            imageURL={book.imageURL}
                                        />
                                    </Link>
                                </Grid>
                            )
                        : null
                    }
                </Grid>

                {booksByCategory('wantToRead').length > 0
                    ?
                    <Box className={style.categoryBox}>
                        <Link to="/books/category/wantToRead" className={style.link}><h2 className={style.categoryTitle}>Want to read</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('wantToRead').length > 0
                        ? booksByCategory('wantToRead')
                            .sort()
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Link to={`/book/${book.id}`}>
                                        <Book
                                            key={book.id}
                                            title={book.title}
                                            description={book.description}
                                            imageURL={book.imageURL}
                                        />
                                    </Link>
                                </Grid>
                            )
                        : null
                    }
                </Grid>

                {booksByCategory('read').length > 0
                    ?
                    <Box className={style.categoryBox}>
                        <Link to="/books/category/read" className={style.link}><h2 className={style.categoryTitle}>Read</h2></Link>
                    </Box>
                    : null
                }

                <Grid container spacing={3}>
                    {booksByCategory('read').length > 0
                        ? booksByCategory('read')
                            .sort()
                            .map(book =>
                                <Grid item sm={4} xs={6}>
                                    <Link to={`/book/${book.id}`}>
                                        <Book
                                            key={book.id}
                                            title={book.title}
                                            description={book.description}
                                            imageURL={book.imageURL}
                                        />
                                    </Link>
                                </Grid>
                            )
                        : null
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Home;