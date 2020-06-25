import React from 'react';

import { Container, Grid } from '@material-ui/core';

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
        // { id: 1, title: 'Clean Code', description: 'Descrição', category: 'reading', image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
        // { id: 2, title: 'Clean Code', description: 'Descrição', category: null, image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg' },
    ]

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                {/* <Link to="/new" className={style.link}><h2 className={style.categoryTitle}>No category</h2></Link> */}

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
            </Container>
        </>
    );
};