import React, { useState } from "react";
import { useSelector } from 'react-redux'
import MovieCard from './../../sharedComponents/MovieCard/MovieCard'
import { Box, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import { useNavigate } from "react-router-dom";


const Movies = () => {
  const [category, setCategory] = useState('popular')
  const latestMovies = useSelector(state => state.fetchMoviesReducer.latestMovies)
  const popularMovies = useSelector(state => state.fetchMoviesReducer.popularMovies)
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`../movie/${id}`)
  }


  const handleCategory = (e) => {
    setCategory(e.target.value)

  }

  return (
    <>
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
              {category == 'popular' ?
                popularMovies.map(x =>
                  <Grid item md={3} key={x.id}>
                    <MovieCard movies={x} onClick={(id) => navigate(`../movie/${id}`)} />
                  </Grid>
                ) :
                category == 'latest' ?
                  latestMovies.map(x =>
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
    </>
  )
}

export default Movies