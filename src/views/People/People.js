import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Grid, CircularProgress, Box } from "@mui/material";
import PeopleCard from './../../sharedComponents/PeopleCard/PeopleCard'
import Layout from "../../sharedComponents/Layout/Layout";

const People = () => {


    const peopleData = useSelector(state => state.fetchPeopleReducer)
    const navigate = useNavigate();
    return (
        <>
            {!peopleData.error ? <Layout>

                <Grid container spacing={2}>
                    {peopleData.popularPeople.map(x =>
                        <Grid item md={3} key={x.id}>
                            <PeopleCard people={x} onClick={(id) => navigate(`../people/${id}`)} />
                        </Grid>
                    )}
                </Grid>
            </Layout> :
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                    <CircularProgress />
                </Box>}
        </>
    )
}

export default People