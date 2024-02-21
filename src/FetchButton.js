import React from 'react';
import { Button, Box } from '@mui/material';

function FetchButton({ fetchStudents }) {
    return (
        <Box padding={2}>
            <Button variant="contained" color="primary" onClick={fetchStudents} >
                Fetch Students
            </Button>
        </Box>
    );
}

export default FetchButton;