import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import React from 'react';



const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
        </Routes>
    )
}


export default AppRoutes
