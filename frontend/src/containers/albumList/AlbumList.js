import React from 'react';
import { Grid , Card, CardMedia, CardHeader ,CardContent, Button, Typography , CardActions} from '@mui/material';
import {Link} from "react-router-dom";

const AlbumList = () => {
    return (
        <Grid>
            <Typography variant="h6" sx={{ margin: '1rem'}}>
                Author
            </Typography>
            <Card sx={{ maxWidth: 300 , margin: '1rem'}}>
                <CardHeader
                    title="Album #3"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.pexels.com/photos/5648438/pexels-photo-5648438.jpeg?cs=srgb&dl=pexels-cottonbro-5648438.jpg&fm=jpg"
                    alt="album"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Album
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button size="small" component={Link} to='/album/:id'>Album list</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AlbumList;
