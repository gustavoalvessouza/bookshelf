import React from 'react'

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
                                    <TextField id="outlined-basic" label="Book title" variant="outlined" className={style.form} />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField id="outlined-basic" label="Description" variant="outlined" className={style.form} />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField id="outlined-basic" label="Author" variant="outlined" className={style.form} />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField id="outlined-basic" label="Image URL" variant="outlined" className={style.form} />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <FormControl variant="outlined" className={style.categorySelect}>
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            label="Category"
                                        >
                                            <MenuItem value='reading'>Reading</MenuItem>
                                            <MenuItem value='wantToRead'>Want to read</MenuItem>
                                            <MenuItem value='read'>Read</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>  
                            </Grid>
                        </form>

                        <Button variant="contained" color="primary" className={style.addButton}>
                            Add
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default NewBook