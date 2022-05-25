import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Box, Container, Typography } from '@mui/material';
import './landingPage.css'

const LandingPage = () => {
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
          <Typography variant="h4">What's Popular</Typography>
        </Box>
      </Container>

    </>
  )
}

export default LandingPage