import React from 'react';

function GroupDisplay({ groups }) {
    return (
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
    );
}

export default GroupDisplay;
