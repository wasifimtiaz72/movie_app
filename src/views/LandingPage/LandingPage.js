import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, OutlinedInput, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { debounce } from "lodash";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles"
import './landingPage.css'
import { getSearchResult } from '../../services/api';
import { getLatestMovies, getPopularMovies, getPopularPeople, getPopularTVshows, getLatestTVshows } from '../../redux/actionCreator/actionCreator';
import ListSection from './components/ListSection';
import SearchingResults from './components/SearchingResults';
import ErrorAlert from '../../sharedComponents/Alerts/ErrorAlert'
const LandingPage = () => {

  const dispatch = useDispatch();
  let theme = createTheme({

  });
  theme = responsiveFontSizes(theme);

  const [querry, setQuerry] = useState('')
  const [error, setError] = useState(false)
  const [searching, setSearching] = useState(false)
  const [searchingResults, setSearchingResults] = useState([])



  useEffect(() => {
    dispatch(getPopularMovies())
    dispatch(getLatestMovies())
    dispatch(getLatestTVshows())
    dispatch(getPopularTVshows())
    dispatch(getPopularPeople())
  }, [])


  const handleQuerry = debounce(async (e) => {
    setQuerry(e)
    setSearching(true)
    if (e === "")
      setSearching(false)
    try {
      const searchRes = await getSearchResult(e)
      if (searchRes.status === 200)
        setSearchingResults(searchRes.data.results)
    } catch (error) {
      setError(true)
    }
  }, 500)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='xl' disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>
          <Box className='banner'>
            <Box className='banner-text'>
              <Typography variant="h3">Welcome.</Typography>
              <Typography variant="h4" className=''>Millions of movies, TV shows and people to discover. Explore now.</Typography>
              <Box className='search-box'>
                <OutlinedInput id="outlined-basic" sx={{ background: 'white', width: '70%', borderRadius: "25px" }} placeholder="Search" label="Outlined" variant="outlined"
                  onChange={(e) => handleQuerry(e.target.value)} />
              </Box>
            </Box>
          </Box>
          {!searching && <ListSection />}
          {searching && searchingResults.map((x) =>
            <SearchingResults results={x} key={x.id} />
          )}
          <br />
          <br />
          {error && <ErrorAlert severity="error">This is an error message!/</ErrorAlert>}
        </Container >
      </ThemeProvider>
    </>
  )
}

export default LandingPage