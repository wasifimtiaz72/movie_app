import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import './peopleCard.css'

const MovieCard = (props) => {

    const { id, name, profile_path } = props.people

    return (
        <>
            <Box className='movie-card' onClick={() => props.onClick(id)} sx={props.sx}>
                <Card variant="outlined">
                    <img src={"https://image.tmdb.org/t/p/original" + profile_path} alt="" style={{ height: '100%', width: "100%" }} />
                    <Typography variant="h6" className='people-title'>{name}</Typography>
                </Card>
            </Box>
        </>
    )
}

export default MovieCard