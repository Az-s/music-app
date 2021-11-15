import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from '../../store/actions/authorActions';

const Authors = () => {
    const dispatch = useDispatch();
    const authors = useSelector(state => state.authors.authors);

    useEffect(() => {
        dispatch(fetchAuthors());
    }, [dispatch]);

    return (
        <>
            {authors.map(author => (
                <Card sx={{ maxWidth: 300, margin: '1rem' }} key={author.id}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={author.image}
                        alt="executor"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {author.name}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="small" component={Link} to='/albums'>More info</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}

export default Authors;
