import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';

function StudentList({ students, courses, courseSelected, setCourseSelected, setCurrentCourse }) {
    const [isListVisible, setIsListVisible] = useState(true);

    const handleCourseSelect = (course) => {
        if (course === courseSelected) {
            setIsListVisible(!isListVisible);
        } else {
            setIsListVisible(true);
            setCourseSelected(course);
            setCurrentCourse(course);
        }
    };

    return (
        <Box>
            <Box display="flex" flexDirection="row" flexWrap="nowrap" gap={2} padding={2}>
                {students.length > 0 && (
                    <Button variant="contained" color={courseSelected === 'All' ? "secondary" : "primary"} onClick={() => handleCourseSelect('All')}>
                        All Students
                    </Button>
                )}
                {courses.map((course, index) => (
                    <Button key={index} variant="contained" color={courseSelected === course ? "secondary" : "primary"} onClick={() => handleCourseSelect(course)}>
                        {course}
                    </Button>
                ))}
            </Box>
            {isListVisible && (
                <List>
                    {(courseSelected === 'All' ? students : students.filter(student => student.course === courseSelected)).map((student, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={student.name} secondary={student.course} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
}

export default StudentList;