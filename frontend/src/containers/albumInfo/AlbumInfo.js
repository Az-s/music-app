import React, { useState } from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum } from '../../store/actions/albumActions'

const AlbumInfo = ({ match }) => {
    const dispatch = useDispatch();
    const album = useSelector(state => state.albums.album);

    useEffect(() => {
        dispatch(fetchAlbum(match.params.id));
    }, [dispatch, match.params.id]);

    return album && (
        <Grid container direction="column" justifyContent='center'>
            <Typography variant="h6" sx={{ margin: '1rem' }}>
                {album.author}
            </Typography>
            <Typography variant="h7" sx={{ margin: '1rem' }}>
                {album.title}
            </Typography>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <List
                    aria-label="contacts"
                    sx={{ minWidth: 480 }}
                >
                    <Grid sx={{ bgcolor: '#e8e8e8', justifyContent: 'center', margin: '1rem' }}>
                        <ListItem disablePadding>
                            <ListItemText inset primary={album.num} />
                            <ListItemText inset primary={album.track}/>
                            <ListItemText inset primary={album.time} />
                        </ListItem>
                    </Grid>
                </List>
            </Grid>
        </Grid>
    )
}

export default AlbumInfo;
