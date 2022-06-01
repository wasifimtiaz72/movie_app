import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, getCast } from "../../services/api";
import { getPopularMovies } from "../../redux/actionCreator/actionCreator";
import { Box, Container, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import PeopleCard from '../../sharedComponents/PeopleCard/PeopleCard'
import './detailedPage.css'
import { Route, Link, Routes, useParams } from 'react-router-dom';
import HorizantalScroll from "../../sharedComponents/HorizantalScroll/HorizantalScroll";




const DetailedPage = () => {
  const [details, setDetails] = useState([])
  const [cast, setCast] = useState([])
  const params = useParams()
  const { id, media_type } = params
  useEffect(() => {
    getAllDetails()
    getMediaCast()
  }, [])

  const getAllDetails = async () => {
    const res = await getDetails(media_type, id)
    if (res.status == 200)
      setDetails(res.data)
  }
  const getMediaCast = async () => {
    const res = await getCast(media_type, id)
    if (res.status == 200)
      setCast(res.data.cast)
  }

  return (
    <>
      {console.log('detail page data', cast)}
      <Layout>
        <Grid container spacing={3} sx={{ background: "pink", padding: 10 }}>
          <Grid item xs={12} md={3}>
            <img src={"https://image.tmdb.org/t/p/original" + details?.poster_path} width='100%' height='100%' alt="" />
          </Grid>
          <Grid item xs={12} md={9} >
            <Box>
              <Typography variant="h4" color="initial">{details?.title}</Typography>
              <p>
                <span>{details?.release_date}</span>
                {details?.genres?.map(x => <span>{x.name}</span>)}
                <span>{details.runtime}</span>
              </p>
              <p>{details.tagline}</p>
              <Typography variant="h5" color="initial">Overview</Typography>
              <p>{details.overview}</p>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ pt: 2 }}>
          <Typography variant="h5" color="initial">Top Billed Cast</Typography>
          <HorizantalScroll>
            {cast?.map(x => x.profile_path &&
              <Box>
                <PeopleCard people={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} />
              </Box>
            )}
          </HorizantalScroll>
        </Box>
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  )
}

export default DetailedPage