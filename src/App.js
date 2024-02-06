import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Typography, Box, Button, Card, Grid } from '@mui/material';
import StudentList from './StudentList.js';
import FetchButton from './FetchButton.js';
import GroupDisplay from './GroupDisplay.js';
import AddStudentSection from './AddStudentSection.js';
import AddCourseInput from './AddCourseInput.js';
import GroupSelector from './GroupSelector.js';
import ColorRectangle from './ColorRectangle.js';

// TODO: Added UI styling, broke group selector and course picker

function App() {
  const [groupSize, setGroupSize] = useState(2);
  const [groups, setGroups] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [courseSelected, setCourseSelected] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [redPercent, setRedPercent] = useState(0);
  const [greenPercent, setGreenPercent] = useState(100);
  const [yellowPercent, setYellowPercent] = useState(0);

  const increaseRed = () => {
    setRedPercent(redPercent + 10);
    setGreenPercent(greenPercent - 10);
  };

  const increaseGreen = () => {
    setGreenPercent(greenPercent + 10);
    setRedPercent(redPercent - 10);
  };

  const increaseYellow = () => {
    setYellowPercent(yellowPercent + 10);
    setGreenPercent(greenPercent - 10);
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/get-students');
      setStudents(response.data);
      const uniqueCourses = [...new Set(response.data.map(student => student.course))];
      setCourses(uniqueCourses);
      setCourseSelected(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addStudent = async (studentName, course) => {
    try {
      const response = await axios.post('/api/add-student', { name: studentName, course });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const generateGroups = () => {
    let shuffledStudents = [...students].filter(student => student.course === currentCourse).map(student => student.name).sort(() => 0.5 - Math.random());
    let generatedGroups = [];
    while (shuffledStudents.length) {
      generatedGroups.push(shuffledStudents.splice(0, groupSize));
    }
    setGroups(generatedGroups);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          Mr. Monty's Classroom
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Student Group Creator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FetchButton fetchStudents={fetchStudents} />
            <StudentList students={students} courses={courses} courseSelected={courseSelected} setCourseSelected={setCourseSelected} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
            <AddStudentSection addStudent={addStudent} courses={courses} />
            <AddCourseInput addCourse={addCourse} />
            <GroupSelector generateGroups={generateGroups} />
          </Grid>
          <Grid item xs={6}>
            <ColorRectangle redPercent={redPercent} greenPercent={greenPercent} yellowPercent={yellowPercent} increaseRed={increaseRed} increaseGreen={increaseGreen} increaseYellow={increaseYellow} />
            <GroupDisplay groups={groups} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
