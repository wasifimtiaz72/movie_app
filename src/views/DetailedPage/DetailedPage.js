import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress, } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { getDetails, getCast } from "../../services/api";
import Layout from "../../sharedComponents/Layout/Layout";
import PeopleCard from '../../sharedComponents/PeopleCard/PeopleCard'
import './detailedPage.css'
import HorizantalScroll from "../../sharedComponents/HorizantalScroll/HorizantalScroll";


const DetailedPage = () => {

  const [details, setDetails] = useState([])
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate();
  const { id, media_type } = params


  useEffect(() => {
    getAllDetails()
    getMediaCast()
  }, [])

  const getAllDetails = async () => {
    try {
      const res = await getDetails(media_type, id)
      if (res.status === 200) {
        setDetails(res.data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(true)
    }

  }
  const getMediaCast = async () => {
    try {
      const res = await getCast(media_type, id)
      if (res.status === 200)
        setCast(res.data.cast)
    } catch (error) {
      setLoading(true)
    }
  }

  return (
    <>
      {!loading ? <Layout>
        <Grid container spacing={3} className='details-container'>
          <Grid item xs={12} md={3}>
            <img src={"https://image.tmdb.org/t/p/original" + details?.poster_path} width='100%' height='100%' alt="" />
          </Grid>
          <Grid item xs={12} md={9} >
            <Box>
              <Typography variant="h4" color="initial">{details?.title}</Typography>
              <p>
                <span>{details?.release_date}</span>
                {details?.genres?.map(x => <span key={x.id}>{x.name}</span>)}
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
              <Box key={x.id}>
                <PeopleCard people={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../people/${id}`)} />
              </Box>
            )}
          </HorizantalScroll>
        </Box>
        <br />
        <br />
        <br />
        <br />

      </Layout> :
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <CircularProgress />
        </Box>
      }
    </>
  )
}

export default DetailedPage