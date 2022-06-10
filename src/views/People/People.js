import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import PeopleCard from './../../sharedComponents/PeopleCard/PeopleCard'
import Layout from "../../sharedComponents/Layout/Layout";
import ErrorAlert from "../../sharedComponents/Alerts/ErrorAlert";

const People = () => {

  const popularPeople = useSelector(state => state.fetchPeopleReducer.get('popularPeople'))
  const peopleError = useSelector(state => state.fetchPeopleReducer.get('error'))
  const navigate = useNavigate();

  return (
    <>
      {!peopleError && popularPeople.length > 1 ?
        <Layout >
          <Grid container spacing={2}>
            {popularPeople.map(x =>
              <Grid item md={3} key={x.id}>
                <PeopleCard people={x} onClick={(id) => navigate(`../people/${id}`)} />
              </Grid>
            )}
          </Grid>
        </Layout>
        : peopleError ?
          <ErrorAlert message="network Error" /> :
          <ErrorAlert message="Redux Error" />
      }
    </>
  )
}

export default People