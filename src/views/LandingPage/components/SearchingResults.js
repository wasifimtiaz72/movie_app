import React from 'react';
import { Typography, Card, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../landingPage.css'
import '../landingPage.css'

const SearchingResults = (props) => {
  const navigate = useNavigate();
  const { id, title, poster_path, release_date, overview, media_type } = props.results
  return (
    <>
      {(poster_path && title) &&
        <Card sx={{ mt: '2rem' }} className='search-grid' onClick={() => navigate(`../${media_type}/${id}`)}>
          <Grid container spacing={1} >
            <Grid item xs={12} md={2} sx={{ height: '180px' }}>
              <img src={"https://image.tmdb.org/t/p/original" + poster_path} style={{ height: '100%', width: "100%", objectFit: 'cover' }} alt="" />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h4" color="initial"> {title}</Typography>
              <p> {release_date}</p>
              <p>{overview}</p>
            </Grid>

          </Grid>
        </Card>}
    </>

  )
}

export default SearchingResults