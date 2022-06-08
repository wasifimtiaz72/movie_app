import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem, CircularProgress } from "@mui/material";
import MovieCard from './../../sharedComponents/MovieCard/MovieCard'
import Layout from "../../sharedComponents/Layout/Layout";


const Movies = () => {
  const [category, setCategory] = useState('popular')
  const [error, setError] = useState(false)
  const latestMoviesStore = useSelector(state => state.fetchMoviesReducer)
  const popularMoviesStore = useSelector(state => state.fetchMoviesReducer)
  const navigate = useNavigate();
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  console.log('movie store', latestMoviesStore);
  return (
    <>
      {(!popularMoviesStore.error || !latestMoviesStore.error) ?
        <Layout>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" color="initial">Category</Typography>
                    <Box sx={{ pt: 3 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category}
                          label="Category"
                          onChange={(e) => handleCategory(e)}
                        >
                          <MenuItem value='popular'>Popular</MenuItem>
                          <MenuItem value='latest'>Latest</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {category === 'popular' ?
                  popularMoviesStore.popularMovies.map(x =>
                    <Grid item md={3} key={x.id}>
                      <MovieCard movies={x} onClick={(id) => navigate(`../movie/${id}`)} />
                    </Grid>
                  ) :
                  category === 'latest' ?
                    latestMoviesStore.latestMovies.map(x =>
                      <Grid item md={3} key={x.id}>
                        <MovieCard movies={x} onClick={(id) => navigate(`../movie/${id}`)} />
                      </Grid>
                    ) :
                    <></>
                }
              </Grid>
            </Grid>
          </Grid>
        </Layout>
        : <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <CircularProgress />
        </Box>}
    </>
  )
}

export default Movies