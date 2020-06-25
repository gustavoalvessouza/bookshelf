import React from 'react'

import Navbar from '../../components/Navbar'

import {
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography
} from '@material-ui/core';

import { useStyles } from './styles'

import addBookIcon from '../../assets/icons/addBook.svg'

function NewBook() {
    const style = useStyles();

    return (
        <>
            <Navbar />

            <Container maxWidth="md" className={style.root}>
                <Grid container spacing={3}>
                    <img src={addBookIcon} className={style.addBookIcon} alt="New Book Icon" />
                    <Card style={{ width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" noWrap>
                                Add a new book to yours
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Save</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Container>
        </>
    )
}

export default NewBook