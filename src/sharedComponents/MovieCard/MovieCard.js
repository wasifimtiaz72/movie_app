import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import './MovieCard.css';
import gray from './../../assets/images/gray.png';

const MovieCard = (props) => {

  const { id, title, poster_path, release_date, name } = props.movies




  return (
    <>
      {poster_path && <Box className='movie-card' onClick={() => props.onClick(id)} sx={props.sx}>
        <Card variant="outlined">
          <img src={"https://image.tmdb.org/t/p/original" + poster_path} style={{ height: '100%', width: "100%" }} alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = { gray }
            }}
          />
          <Box sx={{ pl: 1 }}>
            <Typography variant="h6" className='people-title'>{title ? title : name}</Typography>
            {release_date && <Typography variant="p" className='people-title'>{release_date}</Typography>}
          </Box>
        </Card>

      </Box>}
    </>
  )
}

export default MovieCard