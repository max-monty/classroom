import React from 'react';

function AddCourseInput({ addCourse }) {
    return (
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
    );
}

export default AddCourseInput;
