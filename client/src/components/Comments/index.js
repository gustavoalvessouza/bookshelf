import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as CommentActions from '../../store/modules/comment/actions'

import { commentsByBookId } from '../../utils/commentsByBookId'

import {
    Grid,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    TextField,
    Button
} from '@material-ui/core'

import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

import { useStyles } from './styles'

export default function Comments({ book }) {
    const style = useStyles();
    const dispatch = useDispatch();

    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')

    function handleAddBody(e) {
        setBody(e.target.value)
    }

    function handleAddAuthor(e) {
        setAuthor(e.target.value)
    }

    function handleKeyPress(e) {
        if (e.keyCode === 13) {
            handleAddComment()
        }
    }

    function clearInputs() {
        setBody('')
        setAuthor('')
    }

    function handleAddComment() {
        const comment = {
            id: Math.round(Math.random() * (99999 - 1) + 1),
            timestamp: Date.now(),
            deleted: false,
            body,
            parentId: book.id,
            author
        }

        if (author !== '' && body !== '') {
            dispatch(CommentActions.addComment(comment))

            clearInputs()

            window.location.reload()
        }
    }

    function handleRemoveComment(commentId) {
        dispatch(CommentActions.removeComment(commentId))

        window.location.reload()
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12} >
                    <Card>
                        <CardContent>
                            <Typography variant="h6" >
                                Write a comment
                            </Typography>

                            <form noValidate autoComplete="off">
                                <TextField
                                    style={{ width: '100%', marginTop: '10px' }}
                                    id="outlined-basic"
                                    label="Author..."
                                    value={author}
                                    variant="outlined"
                                    onChange={handleAddAuthor}
                                />

                                <TextField
                                    style={{ width: '100%', marginTop: '10px' }}
                                    id="outlined-basic"
                                    label="Comment..."
                                    value={body}
                                    variant="outlined"
                                    onChange={handleAddBody}
                                    onKeyDown={handleKeyPress}
                                />
                            </form>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={12} xs={12} >
                    <List className={style.commentList}>
                        {commentsByBookId(book.id)
                            .map(comment =>
                                <ListItem alignItems="flex-start" key={String(comment.id)}>
                                    <ListItemAvatar>
                                        <Avatar alt={comment.author} src="https://www.cref12.org.br/wp-content/uploads/2020/01/user-sam.png" />
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={comment.author}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                    style={{ marginRight: '5px' }}
                                                >
                                                    {comment.author}
                                                </Typography>
                                                {comment.body}
                                            </React.Fragment>
                                        }
                                    />

                                    <Button
                                        variant="contained"
                                        disableElevation
                                        color="secondary"
                                        onClick={() => handleRemoveComment(comment.id)}
                                    >
                                        <HighlightOffOutlinedIcon />
                                    </Button>
                                    
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
            </Grid>
        </>
    )
};