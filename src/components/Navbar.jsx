import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function DemoAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" href='/'>
                        Home
                    </IconButton>
                    <IconButton color="inherit" href='/about'>
                        About
                    </IconButton>
                    <IconButton color="inherit" href='/contact'>
                        Contact
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
  );
}