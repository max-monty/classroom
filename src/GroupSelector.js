import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function GroupSelector({ generateGroups, groupSize, setGroupSize }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        generateGroups(groupSize);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" padding={2}>
            <TextField id="groupSize" label="Group Size" value={groupSize} onChange={(e) => setGroupSize(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
                Generate Groups
            </Button>
        </Box>
    );
}

export default GroupSelector;