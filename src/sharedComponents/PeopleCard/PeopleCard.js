import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';


const MovieCard = (props) => {

    const { id, name, profile_path } = props.people

    return (
        <>
            <Box className='movie-card' onClick={() => props.onClick(id)} sx={{ cursor: 'pointer' }}>
                <Card variant="outlined">
                    <CardContent sx={{ padding: 0 }}>
                        <img src={"https://image.tmdb.org/t/p/original" + profile_path} width='100%' height='100%' alt="" />
                        <Box sx={{ pl: 1 }}>
                            <Typography variant="h6">{name}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default MovieCard