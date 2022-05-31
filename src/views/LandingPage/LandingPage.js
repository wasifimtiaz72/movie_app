import React, { useEffect, useState } from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Box, Container, Typography, Button } from '@mui/material';
import './landingPage.css'
import MovieCard from '../../sharedComponents/MovieCard/MovieCard';
import { getServerData } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestMovies, getPopularMovies, getPopularPeople } from '../../redux/actionCreator/actionCreator';
import { fetchMoviesReducer } from '../../redux/reducer/fetchMoviesReducer';


const LandingPage = () => {

  const dispatch = useDispatch()
  const Moviedata = useSelector(state => state.fetchMoviesReducer)
  const peopledata = useSelector(state => state.fetchPeopleReducer)
  console.log('main: ', peopledata);


  useEffect(() => {
    dispatch(getPopularMovies())
    dispatch(getLatestMovies())
    dispatch(getPopularPeople())
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