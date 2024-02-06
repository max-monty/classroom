import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function AddStudentSection({ addStudent }) {
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
            <TextField id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="course" label="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
                Add Student
            </Button>
        </Box>
    );
}

export default AddStudentSection;