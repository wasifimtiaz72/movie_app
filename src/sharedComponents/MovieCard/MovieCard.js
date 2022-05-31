import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import './MovieCard.css';

const MovieCard = (props) => {

  const { id, title, poster_path, release_date, name } = props.movies
  console.log('movie card', props.movies);




  return (
    <>
      <Box className='movie-card' onClick={() => props.onClick(id)} sx={{ cursor: 'pointer' }}>
        <Card variant="outlined">
          <CardContent sx={{ padding: 0 }}>
            <img src={"https://image.tmdb.org/t/p/original" + poster_path} width='100%' height='100%' alt="" />
            <Box sx={{ pl: 1 }}>
              <Typography variant="h6">{title ? title : name}</Typography>
              {release_date && <Typography variant="p">{release_date}</Typography>}
            </Box>
          </CardContent>
        </Card>

      </Box>
    </>
  )
}

export default MovieCard