import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import React from 'react';
import Movies from "../views/Movies/Movies";



const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/movies" element={<Movies />} />
        </Routes>
    )
}


export default AppRoutes
