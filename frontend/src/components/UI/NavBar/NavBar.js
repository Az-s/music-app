import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{justifyContent: 'center'}}>
                    <Typography variant="h6" component={Link} to="/" sx={{color: 'white' , textDecoration: 'none' , flexGrow: 1}}>
                        Music App
                    </Typography>
                    <Button color="inherit" component={Link} to="/signin">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
