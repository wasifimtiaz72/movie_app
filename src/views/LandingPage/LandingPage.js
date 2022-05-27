import React, { useEffect, useState } from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Box, Container, Typography } from '@mui/material';
import './landingPage.css'
import MovieCard from '../../sharedComponents/MovieCard/MovieCard';
import { getServerData } from '../../services/api';
import { useDispatch } from 'react-redux';
import { getPopularMovies, getLatestMovies } from '../../redux/actionCreator/actionCreator';


const LandingPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestMovies())
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