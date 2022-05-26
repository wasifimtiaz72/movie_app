import React from 'react';
import { Box, Typography } from '@mui/material';
import './MovieCard.css';

const MovieCard = (props) => {

    return (
        <>
            <Box className='movie-card'>
                <img src="./../assets/images/thumb.jpeg" width='100%' height='100%' alt="" />
                <Typography variant="h6">Vikings: Valhalla</Typography>
                <Typography variant="p">25 Feb 2022</Typography>
            </Box>
        </>
    )
}

export default MovieCard