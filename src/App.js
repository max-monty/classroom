import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [groupSize, setGroupSize] = useState(2);
  const [groups, setGroups] = useState([]);
  const [course, setCourse] = useState('');
  const [courses, setCourses] = useState(['Course 1', 'Course 2', 'Course 3']);

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleGroupSizeChange = (event) => {
    setGroupSize(Number(event.target.value));
  };

  const addStudent = async () => {
    if (studentName && !students.includes(studentName)) {
      setStudents([...students, studentName]);
      setStudentName('');
    }
    try {
      const response = await axios.post('/api/add-student', {
        name: studentName,
        course
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const generateGroups = () => {
    let shuffledStudents = [...students].sort(() => 0.5 - Math.random());
    let generatedGroups = [];

    while (shuffledStudents.length) {
      generatedGroups.push(shuffledStudents.splice(0, groupSize));
    }

    setGroups(generatedGroups);
  };

  return (
    <div className="App">
      <h1>Student Group Creator</h1>
      <div>
        <input
          type="text"
          value={studentName}
          onChange={handleStudentNameChange}
          placeholder="Enter student name"
        />
        <select value={course} onChange={handleCourseChange}>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter new course"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addCourse(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
      <div>
        <label>
          Group Size:
          <select value={groupSize} onChange={handleGroupSizeChange}>
            {[2, 3, 4, 5].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={generateGroups}>Generate Groups</button>

      <div className="groups">
        {groups.map((group, index) => (
          <div key={index} className="group">
            <h3>Group {index + 1}</h3>
            <ul>
              {group.map((student, idx) => (
                <li key={idx}>{student}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
