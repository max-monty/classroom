import React from 'react';

function FetchButton({ fetchStudents }) {
    return <button onClick={fetchStudents}>Fetch Students</button>;
}

export default FetchButton;