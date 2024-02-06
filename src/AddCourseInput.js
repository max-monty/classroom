import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function AddCourseInput({ addCourse }) {
    const [course, setCourse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addCourse(course);
        setCourse('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField id="course" label="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
                Add Course
            </Button>
        </Box>
    );
}

export default AddCourseInput;