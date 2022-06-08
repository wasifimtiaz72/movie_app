import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem, CircularProgress } from "@mui/material";
import MovieCard from './../../sharedComponents/MovieCard/MovieCard'
import Layout from "../../sharedComponents/Layout/Layout";


const TVshows = () => {
  const [category, setCategory] = useState('popular')
  const navigate = useNavigate();
  const latestTVshowsStore = useSelector(state => state.fetchTVshowsReducer)
  const popularTVshowsStore = useSelector(state => state.fetchTVshowsReducer)

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleTVClick = (id) => {
    navigate(`../tv/${id}`)
  }

  return (
    <>
      {(!latestTVshowsStore.error || !popularTVshowsStore.error) ?
        <Layout >
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
                  popularTVshowsStore.popularTVshows.map(x =>
                    <Grid item md={3} key={x.id}>
                      <MovieCard movies={x} onClick={handleTVClick} />
                    </Grid>
                  ) :
                  category === 'latest' ?
                    latestTVshowsStore.latestTVshows.map(x =>
                      <Grid item md={3} key={x.id}>
                        <MovieCard movies={x} onClick={handleTVClick} />
                      </Grid>
                    ) :
                    <></>
                }
              </Grid>
            </Grid>
          </Grid>
        </Layout> :
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <CircularProgress />
        </Box>
      }
    </>
  )
}

export default TVshows