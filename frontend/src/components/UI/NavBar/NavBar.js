import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{justifyContent: 'center'}}>
                    <Typography variant="h6" component={Link} to="/" sx={{color: 'white' , textDecoration: 'none'}}>
                        Music App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
