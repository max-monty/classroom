import React, { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function AddStudentSection({ addStudent, courses }) {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(name, course);
        setName('');
        setCourse('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <FormControl fullWidth>
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                    labelId="course-label"
                    id="course"
                    value={course}
                    label="Course"
                    onChange={(e) => setCourse(e.target.value)}
                    fullWidth
                >
                    {courses.map((course, index) => (
                        <MenuItem key={index} value={course}>
                            {course}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Add Student
            </Button>
        </Box>
    );
}

export default AddStudentSection;