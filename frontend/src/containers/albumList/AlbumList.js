import React , {useState} from 'react';
import { Grid, Card, CardMedia, CardHeader, CardContent, Button, Typography, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from '../../store/actions/albumActions';

const AlbumList = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums.albums);

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    return (
        <>
            {
                albums.map(album => (
                    <Grid key={album.id}>
                        <Typography variant="h6" sx={{ margin: '1rem' }}>
                            {album.author}
                        </Typography>
                        <Card sx={{ maxWidth: 300, margin: '1rem' }}>
                            <CardHeader
                                title={album.title}
                                subheader={album.date}
                            />
                            <CardMedia
                                component="img"
                                height="140"
                                image={album.img}
                                alt="album"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    {album.amount}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button size="small" component={Link} to='/album/:id'>Album list</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </>
    )
}

export default AlbumList;
