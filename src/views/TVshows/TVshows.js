import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getServerData } from "../../services/api";
import MovieCard from './../../sharedComponents/MovieCard/MovieCard'
import { getPopularMovies } from "../../redux/actionCreator/actionCreator";
import { Box, Container, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import { useNavigate } from "react-router-dom";


const TVshows = () => {
  const [category, setCategory] = useState('popular')
  const navigate = useNavigate();
  const latestTVshows = useSelector(state => state.fetchTVshowsReducer.latestTVshows)
  const popularTVshows = useSelector(state => state.fetchTVshowsReducer.popularTVshows)

  const handleCategory = (e) => {
    setCategory(e.target.value)
    console.log('handle Category', e);
  }

  const handleTVClick = (id) => {
    navigate(`../tv/${id}`)
  }

  return (
    <>
      {console.log('latest tv ', latestTVshows)}
      {console.log('popular tv', popularTVshows)}
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
                popularTVshows.map(x =>
                  <Grid item md={3}>
                    <MovieCard movies={x} onClick={handleTVClick} />
                  </Grid>
                ) :
                category == 'latest' ?
                  latestTVshows.map(x =>
                    <Grid item md={3}>
                      <MovieCard movies={x} onClick={handleTVClick} />
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

export default TVshows