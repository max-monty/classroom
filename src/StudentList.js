import React, { useState } from 'react';

function StudentList({ students, courses, courseSelected, setCourseSelected, currentCourse, setCurrentCourse }) {

    const [allStudents, setAllStudents] = useState(false);

    const handleCourseClick = (course) => {
        setAllStudents(false);
        if (currentCourse === course) {
            setCourseSelected(!courseSelected);
            setCurrentCourse(null)
        } else {
            setCurrentCourse(course);
            setCourseSelected(true);
        }
    };

    const handleAllStudentsClick = () => {
        setAllStudents(!allStudents);
        setCurrentCourse(null);
        allStudents ? setCourseSelected(false) : setCourseSelected(true);
    }

    const filteredStudents = currentCourse
        ? students.filter((student) => student.course === currentCourse)
        : students;

    return (
        <div>
            {students.length > 0 && (
                <div>
                    {courses.map((course) => (
                        <button key={course} onClick={() => handleCourseClick(course)}>
                            {course}
                        </button>
                    ))}
                    <button onClick={handleAllStudentsClick}>All Students</button>
                </div>
            )}
            {courseSelected && (
                <div>
                    {filteredStudents.map((student, index) => (
                        <p key={index}>{student.name} - {student.course}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default StudentList;