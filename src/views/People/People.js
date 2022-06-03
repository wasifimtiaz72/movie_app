import React from "react";
import { useSelector } from 'react-redux'
import PeopleCard from './../../sharedComponents/PeopleCard/PeopleCard'
import { Grid } from "@mui/material";
import Layout from "../../sharedComponents/Layout/Layout";
import { useNavigate } from "react-router-dom";

const People = () => {


    const peopleData = useSelector(state => state.fetchPeopleReducer.popularPeople)
    const navigate = useNavigate();
    return (
        <>
            <Layout>

                <Grid container spacing={2}>
                    {peopleData.map(x =>
                        <Grid item md={3} key={x.id}>
                            <PeopleCard people={x} onClick={(id) => navigate(`../people/${id}`)} />
                        </Grid>
                    )}
                </Grid>
            </Layout>
        </>
    )
}

export default People