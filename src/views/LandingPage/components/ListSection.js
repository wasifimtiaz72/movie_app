import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../landingPage.css'
import MovieCard from '../../../sharedComponents/MovieCard/MovieCard';
import PeopleCard from '../../../sharedComponents/PeopleCard/PeopleCard';
import HorizantalScroll from '../../../sharedComponents/HorizantalScroll/HorizantalScroll';
import ErrorAlert from '../../../sharedComponents/Alerts/ErrorAlert';

const ListSection = () => {

  const navigate = useNavigate();
  const popularMovies = useSelector(state => state.fetchMoviesReducer)
  const peopleData = useSelector(state => state.fetchPeopleReducer)
  const tvData = useSelector(state => state.fetchTVshowsReducer)

  return (
    <>
      <Box mt={4}>
        <Typography variant="h4">Trending Movies</Typography>
        <HorizantalScroll>
          {!popularMovies?.toJS().error ? (popularMovies.toJS().popularMovies.map((x, i) =>
            <Box key={i}>
              <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../movie/${id}`)} />
            </Box>
          )) :
            <ErrorAlert message="Unable to load movies" />
          }
        </HorizantalScroll>

      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending TV shows</Typography>
        <HorizantalScroll>
          {!tvData?.toJS().error ? (tvData.toJS().popularTVshows?.map((x, i) =>
            <Box key={i}>
              <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../tv/${id}`)} />
            </Box>
          )) :
            <ErrorAlert message="Unable to load Tv shows" />
          }
        </HorizantalScroll>
      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending People</Typography>
        <HorizantalScroll>
          {!peopleData.toJS().error ? (peopleData?.toJS().popularPeople?.map((x, i) =>
            <Box key={i}>
              <PeopleCard people={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../people/${id}`)} />
            </Box>
          )) : <ErrorAlert message="Unable to load People" />
          }
        </HorizantalScroll>
      </Box>
    </>
  )
}

export default ListSection