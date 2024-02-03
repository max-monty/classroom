import React, { useState } from 'react';

function AddStudentSection({ addStudent, courses }) {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');

    const handleAddStudent = () => {
        addStudent(studentName, course);
        setStudentName('');
        setCourse('');
    };

    return (
        <div>
            <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
            />
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                {courses.map((course, index) => (
                    <option key={index} value={course}>
                        {course}
                    </option>
                ))}
            </select>
            <button onClick={handleAddStudent}>Add Student</button>
        </div>
    );
}

export default AddStudentSection;
