import React, { useEffect, useState } from "react";
import { getPersonDetails, getPersonCredits } from "../../services/api";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import { useParams, useNavigate } from 'react-router-dom';
import HorizantalScroll from "../../sharedComponents/HorizantalScroll/HorizantalScroll";
import MovieCard from "../../sharedComponents/MovieCard/MovieCard";

const PeopleDetails = () => {
    const params = useParams()
    const navigate = useNavigate();
    const { id } = params
    const [personDetails, setPersonDetails] = useState([])
    const [credits, setCredits] = useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getAllDetails(id)
        getCredits(id)
    }, [])

    const getAllDetails = async (id) => {
        const res = await getPersonDetails(id)
        if (res.status == 200) {
            setPersonDetails(res.data)
            setLoading(false)
        }
    }
    const getCredits = async (id) => {
        const res = await getPersonCredits(id)
        if (res.status == 200)
            setCredits(res.data)
    }

    return (
        <>
            {!loading ? <Layout>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <img src={"https://image.tmdb.org/t/p/original" + personDetails?.profile_path} width='300px' height='450px' alt="" />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant="h4" color="initial">{personDetails?.name}</Typography>
                        <Typography variant="h6" color="initial">Biography</Typography>
                        <p>{personDetails?.biography}</p>
                        <Typography variant="h6" color="initial">Known For</Typography>
                        <p>{personDetails?.biography}</p>
                        <HorizantalScroll>
                            {credits?.cast?.map((x) =>
                                <Box key={x.id}>
                                    <MovieCard movies={x} sx={{ width: '150px', height: '250px', padding: '0 7px' }} onClick={(id) => navigate(`../movie/${id}`)} />
                                </Box>
                            )}
                        </HorizantalScroll>
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

export default PeopleDetails