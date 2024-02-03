import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './StudentList.js';
import FetchButton from './FetchButton.js';
import GroupDisplay from './GroupDisplay.js';
import AddStudentSection from './AddStudentSection.js';
import AddCourseInput from './AddCourseInput.js';
import GroupSelector from './GroupSelector.js';
import ColorRectangle from './ColorRectangle.js';


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
    <div className="App">
      <h1>Mr. Monty's Classroom</h1>
      <h2>Student Group Creator</h2>
      <FetchButton fetchStudents={fetchStudents} />
      <StudentList students={students} courses={courses} courseSelected={courseSelected} setCourseSelected={setCourseSelected} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
      <AddStudentSection addStudent={addStudent} courses={courses} />
      <AddCourseInput addCourse={addCourse} />
      <GroupSelector groupSize={groupSize} setGroupSize={setGroupSize} generateGroups={generateGroups} />
      <GroupDisplay groups={groups} />
      <h2>Cup Tracker</h2>
      <ColorRectangle redPercent={redPercent} greenPercent={greenPercent} yellowPercent={yellowPercent} increaseRed={increaseRed} increaseGreen={increaseGreen} increaseYellow={increaseYellow} />
    </div>
  );
}

export default App;
