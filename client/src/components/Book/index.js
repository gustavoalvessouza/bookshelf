import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { useStyles } from './styles'

export default function Book({ title, author, description, image }) {
    const style = useStyles();

    return (
        <>
            <Card className={style.root}>
                <CardActionArea>
                    <CardMedia
                        className={style.media}
                        image={image}
                        title={title}
                    />
                </CardActionArea>
            </Card>
        </>
    )
};