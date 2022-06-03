import React from 'react';

import { Box, Typography, } from '@mui/material';
import '../landingPage.css'
import MovieCard from '../../../sharedComponents/MovieCard/MovieCard';
import PeopleCard from '../../../sharedComponents/PeopleCard/PeopleCard';
import { useSelector } from 'react-redux';
import HorizantalScroll from '../../../sharedComponents/HorizantalScroll/HorizantalScroll';
import { useNavigate } from 'react-router-dom';


const ListSection = () => {

  const navigate = useNavigate();
  const Moviedata = useSelector(state => state.fetchMoviesReducer)
  const peopledata = useSelector(state => state.fetchPeopleReducer)
  const tvdata = useSelector(state => state.fetchTVshowsReducer)


  return (
    <>
      <Box mt={4}>
        <Typography variant="h4">Trending Movies</Typography>
        <HorizantalScroll>
          {Moviedata.popularMovies?.map((x, i) =>
            <Box key={i}>
              <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../movie/${id}`)} />
            </Box>
          )}
        </HorizantalScroll>
      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending TV shows</Typography>
        <HorizantalScroll>
          {tvdata?.popularTVshows?.map((x, i) =>
            <Box key={i}>
              <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../tv/${id}`)} />
            </Box>
          )}
        </HorizantalScroll>
      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending People</Typography>
        <HorizantalScroll>
          {peopledata?.popularPeople?.map((x, i) =>
            <Box key={i}>
              <PeopleCard people={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../people/${id}`)} />
            </Box>
          )}
        </HorizantalScroll>
      </Box>



    </>
  )
}

export default ListSection