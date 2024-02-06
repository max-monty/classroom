import React from 'react';
import { Button } from '@mui/material';

function FetchButton({ fetchStudents }) {
    return (
        <Button variant="contained" color="primary" onClick={fetchStudents}>
            Fetch Students
        </Button>
    );
}

export default FetchButton;