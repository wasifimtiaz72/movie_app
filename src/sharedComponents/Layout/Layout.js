import { Container } from '@mui/material'
import React from 'react'

const Layout = ({ children }) => {



    return (
        <Container maxWidth="xl" sx={{ pt: 4 }}>
            {children}
        </Container>
    )
}

export default Layout