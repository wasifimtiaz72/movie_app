import React, { useEffect } from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Box, Container, Typography } from '@mui/material';
import './landingPage.css'
import MovieCard from '../../sharedComponents/MovieCard/MovieCard';

const LandingPage = () => {
  useEffect(() => {


  }, [])

  return (
    <>
      <Header />
      <Container>
        <Box className='banner'>
          <Box className='banner-text'>
            <Typography variant="h3">Welcome.</Typography>
            <Typography variant="h4">Millions of movies, TV shows and people to discover. Explore now.</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="h4">Trending</Typography>
        </Box>
        <Box>
          <MovieCard />
        </Box>
      </Container>

    </>
  )
}

export default LandingPage