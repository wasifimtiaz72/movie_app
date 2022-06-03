import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#144164" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <a href='/'>
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                alt="The Movie Database (TMDB)" width="154" height="20" />
                        </a>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button

                                onClick={() => navigate('/movies')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Movies
                            </Button>
                            <Button

                                onClick={() => navigate('/tv')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                TV shows
                            </Button>
                            <Button

                                onClick={() => navigate('/people')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                People
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header