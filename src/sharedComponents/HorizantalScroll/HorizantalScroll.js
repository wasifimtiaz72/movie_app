import './horizantalScroll.css'

import React from 'react'
import { Box } from "@mui/material";

const HorizantalScroll = ({ children }) => {
    return (
        <Box className="hoirzantal-container">
            {children}
        </Box>

    )
}

export default HorizantalScroll