import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';

const AlbumForm = ({ onSubmit }) => {
    const [album, setAlbum] = useState({
        title: "",
        artist: "",
        year: "",
        image: null,
    });

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setAlbum(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setAlbum(prevState => {
            return { ...prevState, [name]: file };
        });
    }

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            autoComplete="off"
            onSubmit={submitFormHandler}
            sx={{ padding: '1rem 4rem' }}
        >

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Title"
                    name="title"
                    value={album.title}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Artist"
                    name="artist"
                    value={album.artist}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Year"
                    name="year"
                    value={album.year}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    type="file"
                    name="image"
                    onChange={fileChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Create</Button>
            </Grid>
        </Grid>
    )
}

export default AlbumForm;
