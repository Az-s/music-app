import React from 'react';
import { Card, CardMedia, CardContent, Button, Typography , CardActions} from '@mui/material';
import {Link} from "react-router-dom";

const Authors = () => {
    return (
        <Card sx={{ maxWidth: 300 , margin: '1rem'}}>
            <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/5648438/pexels-photo-5648438.jpeg?cs=srgb&dl=pexels-cottonbro-5648438.jpg&fm=jpg"
                alt="executor"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Author
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button size="small" component={Link} to='/albums'>More info</Button>
            </CardActions>
        </Card>
    )
}

export default Authors;
