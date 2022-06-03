import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import React from 'react';
import Movies from "../views/Movies/Movies";
import Header from "../sharedComponents/Header/Header";
import TVshows from "../views/TVshows/TVshows";
import People from "../views/People/People";
import DetailedPage from "../views/DetailedPage/DetailedPage";
import PeopleDetails from "../views/PeopleDetails/PeopleDetails";




const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<>  <Header /> <LandingPage /></>} />
            <Route exact path="/movies" element={<>  <Header /> <Movies /></>} />
            <Route exact path="/tv" element={<>  <Header /> <TVshows /></>} />
            <Route exact path="/people" element={<>  <Header /> <People /></>} />
            <Route exact path="/:media_type/:id" element={<>  <Header /> <DetailedPage /></>} />
            <Route exact path="/people/:id" element={<>  <Header /> <PeopleDetails /></>} />
        </Routes>
    )
}


export default AppRoutes
