import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getServerData } from "../../services/api";
import MovieCard from './../../sharedComponents/MovieCard/MovieCard'
import PeopleCard from './../../sharedComponents/PeopleCard/PeopleCard'
import { getPopularMovies } from "../../redux/actionCreator/actionCreator";
import { Box, Container, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import { useNavigate } from "react-router-dom";

const People = (props) => {


    const peopleData = useSelector(state => state.fetchPeopleReducer.popularPeople)
    const navigate = useNavigate();
    const handlePeopleClick = (id) => {
        navigate(`../people/${id}`)
    }
    return (
        <>
            <Layout>

                <Grid container spacing={2}>
                    {peopleData.map(x =>
                        <Grid item md={3}>
                            <PeopleCard people={x} onClick={handlePeopleClick} />
                        </Grid>
                    )}
                </Grid>
            </Layout>
        </>
    )
}

export default People