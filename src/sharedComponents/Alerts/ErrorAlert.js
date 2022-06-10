import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

const ErrorAlert = (props) => {
    const [open, setOpen] = useState(props.open || true)

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert severity="error" sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert