import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './StudentList.js';
import FetchButton from './FetchButton.js';
import GroupDisplay from './GroupDisplay.js';
import AddStudentSection from './AddStudentSection.js';
import AddCourseInput from './AddCourseInput.js';

function App() {
  const [groupSize, setGroupSize] = useState(2);
  const [groups, setGroups] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/get-students');
      setStudents(response.data);
      const uniqueCourses = [...new Set(response.data.map(student => student.course))];
      setCourses(uniqueCourses);
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
    let shuffledStudents = [...students].map(student => student.name).sort(() => 0.5 - Math.random());
    let generatedGroups = [];
    while (shuffledStudents.length) {
      generatedGroups.push(shuffledStudents.splice(0, groupSize));
    }
    setGroups(generatedGroups);
  };

  return (
    <div className="App">
      <h1>Student Group Creator</h1>
      <FetchButton fetchStudents={fetchStudents} />
      <StudentList students={students} />
      <AddStudentSection addStudent={addStudent} courses={courses} />
      <AddCourseInput addCourse={addCourse} />
      <div>
        <label>
          Group Size:
          <select value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))}>
            {[2, 3, 4, 5].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </label>
        <button onClick={generateGroups}>Generate Groups</button>
      </div>
      <GroupDisplay groups={groups} />
    </div>
  );
}

export default App;
