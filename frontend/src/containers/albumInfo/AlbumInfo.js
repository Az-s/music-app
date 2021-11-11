import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

const AlbumInfo = () => {
    return (
        <Grid container direction="column" justifyContent='center'>
            <Typography variant="h6" sx={{ margin: '1rem' }}>
                Author
            </Typography>
            <Typography variant="h7" sx={{ margin: '1rem' }}>
                Album
            </Typography>
            <Grid sx={{display: 'flex' ,justifyContent: 'center'}}>
                <List
                    aria-label="contacts"
                    sx={{minWidth: 480}}
                >
                    <Grid  sx={{ bgcolor: '#e8e8e8' ,justifyContent: 'center', margin: '1rem' }}>
                        <ListItem disablePadding>
                            <ListItemText inset primary="№1" />
                            <ListItemText inset primary="Summer" />
                            <ListItemText inset primary="3:44" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText inset primary="№2" />
                            <ListItemText inset primary="Autumn" />
                            <ListItemText inset primary="3:44" />
                        </ListItem>
                    </Grid>
                </List>
            </Grid>
        </Grid>
    )
}

export default AlbumInfo;
