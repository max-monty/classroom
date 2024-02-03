import React, { useState } from 'react';

function AddCourseInput({ addCourse }) {
    const [courseName, setCourseName] = useState('');

    const handleInputChange = (e) => {
        setCourseName(e.target.value);
    };

    const handleSubmit = () => {
        addCourse(courseName);
        setCourseName('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter new course"
                value={courseName}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddCourseInput;
