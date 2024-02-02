import React from 'react';

function StudentList({ students }) {
    return (
        <div>
            {students.map((student, index) => (
                <p key={index}>{student.name}</p>
            ))}
        </div>
    );
}

export default StudentList;