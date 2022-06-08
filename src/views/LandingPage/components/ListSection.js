import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../landingPage.css'
import MovieCard from '../../../sharedComponents/MovieCard/MovieCard';
import PeopleCard from '../../../sharedComponents/PeopleCard/PeopleCard';
import HorizantalScroll from '../../../sharedComponents/HorizantalScroll/HorizantalScroll';


const ListSection = () => {

  const navigate = useNavigate();
  const MovieData = useSelector(state => state.fetchMoviesReducer)
  const peopleData = useSelector(state => state.fetchPeopleReducer)
  const tvData = useSelector(state => state.fetchTVshowsReducer)


  return (
    <>
      <Box mt={4}>
        <Typography variant="h4">Trending Movies</Typography>
        <HorizantalScroll>
          {!MovieData.error ?
            (
              MovieData.popularMovies?.map((x, i) =>
                <Box key={i}>
                  <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../movie/${id}`)} />
                </Box>
              )
            ) :
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
              <CircularProgress />
            </Box>
          }
        </HorizantalScroll>

      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending TV shows</Typography>
        <HorizantalScroll>
          {!tvData.error ? (tvData?.popularTVshows?.map((x, i) =>
            <Box key={i}>
              <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../tv/${id}`)} />
            </Box>
          )) : <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
            <CircularProgress />
          </Box>}
        </HorizantalScroll>
      </Box>
      <Box mt={4}>
        <Typography variant="h4">Trending People</Typography>
        <HorizantalScroll>
          {!peopleData.error ? (peopleData?.popularPeople?.map((x, i) =>
            <Box key={i}>
              <PeopleCard people={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../people/${id}`)} />
            </Box>
          )) : <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
            <CircularProgress />
          </Box>}
        </HorizantalScroll>
      </Box>



    </>
  )
}

export default ListSection