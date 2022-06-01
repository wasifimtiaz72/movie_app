import './horizantalScroll.css'

import React from 'react'
import { Box, Container, Grid, Typography, Card, CardContent, FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const HorizantalScroll = ({ children }) => {
    return (
        <Box className="hoirzantal-container">
            {children}
        </Box>

    )
}

export default HorizantalScroll